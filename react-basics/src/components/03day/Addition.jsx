import React, { useState } from 'react'
import Image1 from '../../assets/images/b.jpg'
const Addition = () => {
    let styles={color:'GrayText',backgroundColor:'aqua'}
    let [numbers,setNumbers]=useState({num1:'',num2:''})
    let [add,setAdd]=useState('')
    let handleAdd=(e)=>{
        e.preventDefault()
        console.log(numbers)
        setAdd(Number(numbers.num1)+Number(numbers.num2))  }
  return (
    <> <div className="container mt-5 shadow p-3">
            <h1 className='App' style={{color:'GrayText',backgroundColor:'aqua'}}>Addition of two numbers</h1> <hr/>
            <div className="row">
                <div className="col">
                    {/* <img src={Image1} className="img-fluid"/> */}
                    <img src={require('../../assets/images/b.jpg')} className="img-fluid"></img>  </div>
                <div className="col">
                    <form onSubmit={handleAdd}>
                        <div className="mb-3">
                            <label className='form-label' style={styles}>Number1</label>
                            <input className='form-control' name="num1" value={numbers.num1} onChange={(e)=>{
                                // console.log(e)
                                setNumbers({...numbers,num1:e.target.value})
                            }}/>   </div>
                        <div className="mb-3">
                            <label className='form-label'>Number2</label>
                            <input className='form-control' value={numbers.num2} 
                            onChange={(e)=>setNumbers({...numbers,num2:e.target.value})}/></div>
                        <button type="submit" className="btn btn-primary"> Submit </button>                        
                    </form>
                    <h1>{add}</h1>
                </div>
            </div>
        </div>
    </>
  )
}

export default Addition
