import React from 'react'
import { useForm } from 'react-hook-form'
import { Link,useNavigate } from 'react-router-dom'
import LoginImg from '/src/assets/login.png'
import axios from 'axios'
import {toast} from 'react-toastify'
const Login = () => {
  const {register,handleSubmit, formState: { errors },trigger}=useForm()
  const navigate=useNavigate()
    let submitForm=async(user)=>{
        // alert(JSON.stringify(user))
        try{
          let res = await axios.get(`https://662f214343b6a7dce30e77c5.mockapi.io/users?email=${user.email}`)
          console.log(res.data)
          if(res.data[0].password == user.password){
            //sessionStroage 
            let obj = {isLoggedIn:true, email:user.email, name:res.data[0].username, role:res.data[0].role}
            sessionStorage.setItem("logindetails",JSON.stringify(obj))

            if(res.data[0].role=="1"){ navigate('/')}
            else if(res.data[0].role=="0"){ navigate('/admin')}
            
            toast.success("loggedIn Successfully")
             
          }
          else toast.error("Invalid Credentails")
        }
        catch(error){toast.error("Invalid Credentails")}
    }
  return (
    <div className='container mt-3 col-8 shadow p-4' >
    <h1>Login Form</h1><hr/>
    <div className="row">
      <div className="col"><img src={LoginImg} className='img-fluid'/></div>
      <div className="col"> <form onSubmit={handleSubmit(submitForm)}>
       <div class="mb-3">
            <label for="" class="form-label">Email</label>
            <input type="text" name="email" class="form-control" 
            {...register('email',{required:"email is required",
            pattern:{value:/^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/, message:'invalid email'}})}  onBlur={()=>trigger('email')}/>
        </div>
        {errors.email && <span className='text-danger'>{errors.email.message}</span>}
        <div class="mb-3">
            <label for="" class="form-label">Password</label>
            <input type="password" name="password" class="form-control" {...register('password',{required:"Password is required"})}
             onBlur={()=>trigger('password')}/>
        </div>
        {errors.password && <span className='text-danger'>{errors.password.message}</span>}
        <div class="d-grid gap-2">
            <button  type="submit" class="btn btn-primary"> Submit </button>
        </div>
        <p>Create an Account ?? <Link to='/register'>Signup</Link></p>
    </form></div>
    </div>
   
</div>
  )
}

export default Login
