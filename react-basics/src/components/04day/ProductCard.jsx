import React, { useContext } from 'react'
import { DataContext } from '../11day/ContextforCart'

const ProductCard = ({product}) => {
    let {id,name,image,price,category,stock}=product

    let data = useContext(DataContext)
    let {ADD_TO_CART,cart}=data
    let handleCart=()=>{
        ADD_TO_CART(product)
    }
  return (
    <div className="col-3 mb-3">
        {/* <div className="card">
            <img className="card-img-top"  src={require(`../../assets/${product.image}`)} height={170} alt="Title" />
            <div className="card-body">
                <h4 className="card-title">{product.name}</h4>
                <p className="card-text">{product.category}</p>
                <p className="card-text">${product.price}</p>
            </div>
        </div> */}
        
        <div className="card">
            <img className="card-img-top"  src={require(`../../assets/${image}`)} height={170} alt="Title" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">{category}</p>
                <p className="card-text">${price}</p>
                <p className="card-text">Available : {stock}</p>
                <button
                    type="button"
                    class="btn btn-primary" onClick={handleCart}
                >
                    Add to Cart
                </button>
                
            </div>
        </div>
    </div>  
  )
}

export default ProductCard
