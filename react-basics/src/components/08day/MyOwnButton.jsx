import React from 'react'

const MyOwnButton = ({class1,id,fun,...props}) => {
  return (
   <button className={class1} id={id}
   onClick={fun} {...props} onDoubleClick={()=>alert("dobule Clicked")}>
    {props.children}
   </button>
  )
}

export default MyOwnButton
