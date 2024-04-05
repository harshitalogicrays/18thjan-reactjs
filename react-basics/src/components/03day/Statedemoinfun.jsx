import React, { useState } from 'react'

const Statedemoinfun = (props) => {
    let [num1,setNum1]=useState(12)
    let [num2,setNum2]=useState(4)
    let [result,setResult]=useState(0)
    let [count,setCount]=useState('')

    let [isLoggedIn,setIsLoggedIn]=useState(true)
    let [obj,setObj]=useState({username:'',email:''}) // obj.username 
    let [products,setProducts]=useState(["","","",""]) //products[0]
    let [address,setAddress]=useState(props.address) //address state variable = "Pune"

    let handleClick=()=> {    
        setResult(num1+num2) //  result=num1+num2
    }
  return (
  <>
     <button type="button" class="btn btn-info me-3" onClick={handleClick}>
        Click Me to call handleClick1 add numbers
      </button>
      <>
            <h3>num1 = {num1} and num2={num2}</h3>
            <h3> Addition - {result}</h3>
      </>

      <hr/>

        <button type="button" class="btn btn-primary me-2"  
        onClick={()=>setCount(parseInt(count+1))}>
            Counter
        </button>
        <button type="button" class="btn btn-primary"  
        onClick={()=>setCount((prev)=>parseInt(prev+5))}>
            increase by 5
        </button>
        <h1>count : {count}</h1>

  </>
  )
}

export default Statedemoinfun
