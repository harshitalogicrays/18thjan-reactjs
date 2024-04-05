import React, { useState } from 'react'

const Register = () => {
    let [user,setUser]=useState({username:'',email:'',password:'',cpassword:''})
    let handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
    let handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(user))
    }
  return (
    <div className='container mt-3 col-6 shadow p-4' >
        <h1><i className='bi bi-pencil-square'></i> Register Here</h1><hr/>
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="" class="form-label">Username</label>
                <input type="text" name="username" class="form-control" value={user.username}
                onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" value={user.email}
                onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" value={user.password}
                onChange={handleChange}/>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Confirm Password</label>
                <input type="password" name="cpassword" class="form-control" value={user.cpassword}
                onChange={handleChange}/>
            </div>
            <div class="d-grid gap-2">
                <button  type="submit" class="btn btn-primary"> Submit </button>
            </div>
            <p>Already an Account ?? <a href="">Login</a></p>
        </form>
    </div>
  )
}

export default Register
