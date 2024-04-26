import React, { createContext, useState } from 'react'
export const DataContext = createContext()
const ContextforCart = ({children}) => {
    const [cart,setCart]=useState([])
    const [total,setTotal]=useState(0)
    let ADD_TO_CART=(product)=>{ 
        console.log("added to cart",product);
        setCart([...cart,{...product,qty:1}])
    }
    let INCREASE=()=>{}
    let DECREASE=()=>{}
    let REMOVE_ITEM=()=>{}
    let EMPTY_CART=()=>{}
    let CALCULATE_TOTAL=()=>{}
  return (
 <>
    {/* <DataContext.Provider value="happy">
        {children}
    </DataContext.Provider> */}

<DataContext.Provider value={{cart,total,ADD_TO_CART,INCREASE,DECREASE,REMOVE_ITEM,EMPTY_CART,CALCULATE_TOTAL}}>
        {children}
    </DataContext.Provider>
 </>
  )
}

export default ContextforCart
