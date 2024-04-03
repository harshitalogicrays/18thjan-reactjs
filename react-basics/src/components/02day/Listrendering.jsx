import React from 'react'

const Listrendering = () => {
    let names=["abc","def","ghi","jkl","mno","pqr"]
    let result= names.map((name,index)=><h1 key={index}>{name}</h1>)
  return (
    <>
      {/* {names} */}

      {names.map((name,index)=><h1 key={index}>{name}</h1>)}

      {result}
    </>
  )
}

export default Listrendering
