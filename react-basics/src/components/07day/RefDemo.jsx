import React, { useRef } from 'react'

const RefDemo = () => {
    let styles={width:'40px',textAlign:'center'}
    let countRef=useRef()
    let decrease=()=>{
        if(countRef.current.value > 1)
            countRef.current.value--
    }
  return (
   <>
    <button onClick={decrease}>-</button>
    <input style={styles} defaultValue={1} ref={countRef}/>
    <button onClick={()=>countRef.current.value++}>+</button>
    
   </>
  )
}

export default RefDemo
