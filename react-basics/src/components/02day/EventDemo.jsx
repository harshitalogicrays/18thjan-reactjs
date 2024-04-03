import React from 'react'

const EventDemo = () => {
    function handleClick(){
        alert("handleClick called")
    }

    let handleClick1=(a,b)=>alert(a+b)
  return (
    <>
      <button type="button" class="btn btn-primary me-3" onClick={()=>alert("button clicked")}>
        Click Me to display alert message
      </button>
      <button type="button" class="btn btn-danger me-2" onClick={handleClick}>
        Click Me to call handleClick
      </button>
      <button type="button" class="btn btn-danger me-3" onClick={()=>handleClick()}>
        Click Me to call handleClick
      </button>
      <button type="button" class="btn btn-info me-3" onClick={()=>handleClick1(2,4)}>
        Click Me to call handleClick1 add numbers
      </button>
    </>
  )
}

export default EventDemo
