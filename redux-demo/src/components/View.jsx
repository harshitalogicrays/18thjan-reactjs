import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_ALL_USERS, REMOVE_USER, selectUsers } from '../redux/userSlice'

const View = () => {
//   const allusers =  useSelector((state)=>state.user.users)
const allusers=useSelector(selectUsers)
console.log(allusers)
const dispatch=useDispatch()
  return (
    <>
<table class="border-2 border-solid" width="500px">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Remove</th>
    </tr>
  </thead>
  <tbody>
    {allusers.length==0 && <tr><td colSpan={4}>No user found</td></tr>}
    {allusers.map((user,index)=>
        <tr key={user.id}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td><button type="button" onClick={()=>dispatch(REMOVE_USER(index))}>Remove</button></td>
        </tr>
    )}
     </tbody>
</table>
<button type="button" onClick={()=>dispatch(REMOVE_ALL_USERS())}>Remove All Users</button>
    </>
  )
}

export default View
