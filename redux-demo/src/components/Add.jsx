import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_USER } from '../redux/userSlice'

const Add = () => {
    let [user,setUser]=useState({name:'',email:''})
    const dispatch=useDispatch()
    let handleSubmit=(e)=>{
        e.preventDefault()
        // alert(JSON.stringify(user))
        dispatch(ADD_USER(user))
        setUser({name:'',email:''})
    }
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center  lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
       Add User
      </h2>
    </div>

    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
            Name
          </label>
          <div className="mt-2">
            <input
              id="name" value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})}
              name="name"
              type="text"              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email" value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  </div>
</>
  )
}

export default Add
