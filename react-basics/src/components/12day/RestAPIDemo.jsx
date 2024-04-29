import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const RestAPIDemo = () => {
const [users,setUsers]=useState([])
  useEffect(()=>{getData() },[])

  // let getData=()=>{
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res)=>{    
  //       return res.json().then((data)=>{
  //         console.log(data)
  //       setUsers(data)
  //     }).catch(err=>toast.error(err.message))

  //     })
  // }

  // let getData=async()=>{
  //   try{
  //     let res= await fetch("https://jsonplaceholder.typicode.com/users")
  //     let data=await res.json()
  //     setUsers(data)
  //   }
  //   catch(err){
  //     toast.error(err.message)
  //   }
  // }

  // let getData=()=>{
  //   axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
  //     console.log(res)
  //     setUsers(res.data)
  //   }).
  //   catch(err=>toast.error(err.message))
  // }

  // let getData=async()=>{
  //   try{
  //     let res=await axios.get("https://jsonplaceholder.typicode.com/users")
  //     console.log(res)
  //     setUsers(res.data)
  //   }  
  //   catch(err){
  //     toast.error(err.message)}

  // }

   let getData=async()=>{
    try{
      let res=await axios.get("http://localhost:8000/users")
      console.log(res)
      setUsers(res.data)
    }  
    catch(err){
      toast.error(err.message)}

  }


  return (
    <div>
      {users.map(user=>  <p>{user.name}</p>)}
      
    </div>
  )
}

export default RestAPIDemo
