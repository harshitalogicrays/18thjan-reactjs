import React, { useState } from 'react'

const MyOwnButton = ({class1,id,fun,...props}) => {
  let [var1,setVar]=useState("Ram")
  return (
    <>
   <button className={class1} id={id}
   onClick={fun} {...props} onDoubleClick={()=>setVar("Meera")}>
    {props.children}
   </button>
   <br/>
   {var1}
   </>
  )
}

export default MyOwnButton
