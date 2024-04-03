import React from 'react'

const Statedemo = () => {
    let num1=12
    let num2=4
    let result =0
    let handleClick=(a,b)=> {
        result=a+b
        alert(result)
    }
  return (
  <>
     <button type="button" class="btn btn-info me-3" onClick={()=>handleClick(num1,num2)}>
        Click Me to call handleClick1 add numbers
      </button>
      <>
            <h3>num1 = {num1} and num2={num2}</h3>
            <h3> Addition - {result}</h3>
      </>
  </>
  )
}

export default Statedemo
