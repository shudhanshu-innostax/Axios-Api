import React from 'react'

const Product = ({item}) => {
  return (
    <div className='flex flex-col w-60 gap-5'>
        <img className='h-45 w-50' src={item.image} alt="product-img" />
        <h3><span className='font-bold'>Name:</span> {item.title}</h3>
        <p><span className='font-bold'>Price:</span> {item.price}</p> 
    </div>
  )
}

export default Product;