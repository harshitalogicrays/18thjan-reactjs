import React, { Component } from 'react'

export default class Forminclass extends Component {
    constructor(props) {
      super(props)    
      this.state = {user:{username:'',email:'',password:'',cpassword:''},errors:{}}
    }
    handleChange=(e)=>{
        this.setState({
            user:{
                ...this.state.user,
                [e.target.name]:e.target.value
            }
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        alert(JSON.stringify(this.state.user))
    }
  render() {
    return (
        <div className='container mt-3 col-6 shadow p-4' >
        <h1><i className='bi bi-pencil-square'></i> Form Validations</h1><hr/>
        <form onSubmit={this.handleSubmit}>
            <div class="mb-3">
                <label for="" class="form-label">Username</label>
                <input type="text" name="username" 
                class="form-control" value={this.state.user.username}
                onChange={this.handleChange} />
            </div>
             <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input type="text" name="email" class="form-control" value={this.state.user.email}
                onChange={this.handleChange}/>
            </div>
              <div class="mb-3">
                <label for="" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" value={this.state.user.password}
                onChange={this.handleChange} />
            </div>
             <div class="mb-3">
                <label for="" class="form-label">Confirm Password</label>
                <input type="password" name="cpassword" class="form-control" value={this.state.user.cpassword}
                onChange={this.handleChange}/>
            </div>
              <div class="d-grid gap-2">
                <button  type="submit" class="btn btn-primary"> Submit </button>
            </div>
            <p>Already an Account ?? <a href="">Login</a></p>
        </form>
    </div>
    )
  }
}
