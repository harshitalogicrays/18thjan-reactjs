import React, { useState } from 'react'

const FormValidation = () => {
    let [user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
    let [errors,setErrors]=useState({})
    let handleChange=(e)=>{
        setUser({
            ...user, [e.target.name]:e.target.value
        }) }
    let handleSubmit=(e)=>{
        e.preventDefault()
        let myerrors=validations() //{}
        if(Object.keys(myerrors).length == 0 ){
            setErrors({})
            alert(JSON.stringify(user))
        }
        else {
            e.preventDefault()
            setErrors(myerrors)
        } }

    let validations=()=>{
        let formerrors={} //empty object
        let emailpattern=/^[\w\!\#\$\%\^\&\*\-\+\=\.]+\@[\w]+\.[a-zA-Z]{3}$/
        if(user.username=='')
            formerrors.unameerr="Username is required" //formerrors={unameerr:"Username is required"}
        if(user.email=='')
            formerrors.emailerr="email is required"
        else if(!emailpattern.test(user.email))
           formerrors.emailerr="Invalid Email"
        if(user.password.length == 0)
            formerrors.pwderr="password is required"
        if(user.cpassword == '' || user.cpassword != user.password)
            formerrors.cpwderr="password not match"
        return formerrors
    }
  return (
    <div className='container mt-3 col-6 shadow p-4' >
        <h1><i className='bi bi-pencil-square'></i> Form Validations</h1><hr/>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="" class="form-label">Username</label>
                <input type="text" name="username" 
                class={`form-control ${errors.unameerr && 'is-invalid'}`} 
                value={user.username}
                onChange={handleChange}/>
            </div>
            {errors.unameerr && <span className='text-danger'>{errors.unameerr}</span>}
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" value={user.email}
                onChange={handleChange}/>
            </div>
            {errors.emailerr && <span className='text-danger'>{errors.emailerr}</span>}
            <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" value={user.password}
                onChange={handleChange}/>
            </div>
            {errors.pwderr && <span className='text-danger'>{errors.pwderr}</span>}
            <div class="mb-3">
                <label for="" class="form-label">Confirm Password</label>
                <input type="password" name="cpassword" class="form-control" value={user.cpassword}
                onChange={handleChange}/>
            </div>
            {errors.cpwderr && <span className='text-danger'>{errors.cpwderr}</span>}
            <div class="d-grid gap-2">
                <button  type="submit" class="btn btn-primary"> Submit </button>
            </div>
            <p>Already an Account ?? <a href="">Login</a></p>
        </form>
    </div>
  )
}

export default FormValidation
