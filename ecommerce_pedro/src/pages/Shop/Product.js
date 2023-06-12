import React from 'react'

const Product = ({ data }) => {
    // console.log('data',data)
    return (
        <div className='product'>
            <img src={data?.productImage} alt='' />
            <div className='description'>
                <p><b>{data?.productName}</b>  </p>
                <p>${data?.price}</p>
            </div>
            {/* <button className="addToCartBttn" onClick={() => addToCart(id)}>
                Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button> */}
        </div>
    )
}

export default Product