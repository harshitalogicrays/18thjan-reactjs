import React, { useContext } from 'react'
import { DataContext } from '../11day/ContextforCart'

const Home = () => {
  const data = useContext(DataContext)
// console.log(data)
  return (
   <>
    <h1>Home Page</h1>
   </>
  )
}

export default Home
