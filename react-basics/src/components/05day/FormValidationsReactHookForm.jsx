import React from 'react'
import { useForm } from 'react-hook-form'

const FormValidationsReactHookForm = () => {
    const {register,handleSubmit, formState: { errors },trigger,getValues}=useForm()

    let submitForm=(user)=>{
        alert(JSON.stringify(user))
    }
  return (
    <div className='container mt-3 col-6 shadow p-4' >
    <h1><i className='bi bi-pencil-square'></i> Form Validations - React Hook Form</h1><hr/>
    <form onSubmit={handleSubmit(submitForm)}>
        <div class="mb-3">
            <label for="" class="form-label">Username</label><input type="text" name="username" 
            class={`form-control`}  
            {...register('username',{required:"Username is required",
             minLength:{ value:5,message:"min 5 char"},
            maxLength:{ value:20,message:"max 20 char"}
            })} onBlur={()=>trigger('username')}  />
        </div>
            {errors.username && <span className='text-danger'>{errors.username.message}</span>}
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
        <div class="mb-3">
            <label for="" class="form-label">Confirm Password</label>
            <input type="password" name="cpassword" class="form-control" {...register('cpassword',{required:"confirm Password is required",
            validate:(cpwd)=>{
                let {password}=getValues()
                return password == cpwd || "password not match"
            }    
        })}
             onBlur={()=>trigger('cpassword')}
            />
        </div>
        {errors.cpassword && <span className='text-danger'>{errors.cpassword.message}</span>}
        <div class="d-grid gap-2">
            <button  type="submit" class="btn btn-primary"> Submit </button>
        </div>
        <p>Already an Account ?? <a href="">Login</a></p>
    </form>
</div>
  )
}

export default FormValidationsReactHookForm
