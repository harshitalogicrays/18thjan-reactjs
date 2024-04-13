import React, { useCallback, useEffect, useRef, useState } from 'react'

const UseCallbackDemo = () => {
    let [password,setPassword]=useState('')
    let [length,setLength]=useState(6)
    let [numAllowed,setNumAllowed]=useState(false)
    let [charAllowed,setCharAllowed]=useState(false)
    let copyRef=useRef()
    let focusRef=useRef()
    useEffect(()=>{
        focusRef.current.focus()
    },[])

    // let passwordGenerator=()=>{
    //     let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    //     if(numAllowed){str += '0987654321'}
    //     if(charAllowed){str += '!@#$%^&*()-+=_.'}

    //     let data=''
    //     for(let i=0;i<length;i++){
    //         data += str.charAt(Math.floor(Math.random()*str.length))
    //     }
    //     setPassword(data)
    // }
    let passwordGenerator= useCallback(()=>{
            let str='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
            if(numAllowed){str += '0987654321'}
            if(charAllowed){str += '!@#$%^&*()-+=_.'}
            let data=''
            for(let i=0;i<length;i++){
                data += str.charAt(Math.floor(Math.random()*str.length)) }
            setPassword(data) },[length,numAllowed,charAllowed])  

    useEffect(()=>{ passwordGenerator() },[length,numAllowed,charAllowed])

    let handleCopy=()=>{
        copyRef.current.style.color="red"
        copyRef.current.select()
        copyRef.current.setSelectionRange(0,3)
        focusRef.current.value=copyRef.current.value
    }
  return ( <>
    <div className="container mt-5 col-6">
    <input type="text" className='form-control' ref={focusRef}/>
        <div className="input-group">
            <input type="text" className='form-control' value={password} ref={copyRef}/>
            <button  type="button" class="btn btn-primary" onClick={handleCopy} >Copy  </button> </div>
        <div><input type="range" className='me-2' min={4} max={50} value={length} onChange={(e)=>setLength(e.target.value)}/>Length({length})
            <input type="checkbox" className='ms-2' 
            onChange={(e)=>setNumAllowed(!numAllowed)}></input>Numbers
            <input type="checkbox" className='ms-2' 
            onChange={(e)=>setCharAllowed(!charAllowed)}></input>Characters
        </div>
    </div>
    </>
  )
}

export default UseCallbackDemo
