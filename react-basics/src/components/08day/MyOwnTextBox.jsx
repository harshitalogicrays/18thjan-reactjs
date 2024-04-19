import React from 'react'

const MyOwnTextBox = ({...props}) => {
  return (
    <input className='form-control'
     {...props}></input>
  )
}

export default MyOwnTextBox
