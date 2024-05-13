import React, { createContext, useState } from 'react'
import { toast } from 'react-toastify'
export const DataContext = createContext()
const ContextforCart = ({children}) => {
    const [cart,setCart]=useState([])
    const [total,setTotal]=useState(0)
    let ADD_TO_CART=(product)=>{ 
        // console.log("added to cart",product);
        const itemIndex = cart.findIndex(item=>item.id==product.id)
        if(itemIndex==-1){ //add to cart
            setCart([...cart,{...product,qty:1}])
            toast.success(`${product.name}  added to cart`)
        }
        else {
            toast.info(`${product.name} already added to cart`)
        }
    
    }
    let INCREASE=(product)=>{
        const itemIndex = cart.findIndex(item=>item.id==product.id)
        if(itemIndex != -1){
            if( cart[itemIndex].qty < product.stock)
                cart[itemIndex].qty++
            else 
                toast.info(`only ${product.stock} qty available`)
        }
        setCart([...cart])
    }
    let DECREASE=(product)=>{
        const itemIndex = cart.findIndex(item=>item.id==product.id)
        if(itemIndex != -1){
            if( cart[itemIndex].qty > 1)
                cart[itemIndex].qty--
        }
        setCart([...cart])
    }
    let REMOVE_ITEM_BY_ID=(id)=>{
       const filters =  cart.filter(item=>item.id != id)
       setCart([...filters])
    }
    let EMPTY_CART=()=>{
        setCart([])
        setTotal(0)
    }
    let CALCULATE_TOTAL=()=>{
        let t =  cart.reduce((prev,curr)=>{ return prev+(curr.qty*curr.price)},0)
        setTotal(t)
    }
  return (
 <>
    <DataContext.Provider value={{cart,total,ADD_TO_CART,INCREASE,DECREASE,REMOVE_ITEM_BY_ID,EMPTY_CART,CALCULATE_TOTAL}}>
        {children}
    </DataContext.Provider>
 </>
  )
}

export default ContextforCart
