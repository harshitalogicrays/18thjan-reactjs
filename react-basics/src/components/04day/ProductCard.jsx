import React from 'react'

const ProductCard = ({product}) => {
    let {name,image,price,category}=product
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
            </div>
        </div>
    </div>  
  )
}

export default ProductCard
