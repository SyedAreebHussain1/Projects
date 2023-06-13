import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

const Product = ({ data }) => {
    // console.log('data',data)
    const { addToCart, cartItems } = useContext(ShopContext)
    const cartItemCount = cartItems[data.id]
    return (
        <div className='product'>
            <img src={data?.productImage} alt='' />
            <div className='description'>
                <p><b>{data?.productName}</b>  </p>
                <p>${data?.price}</p>
            </div>

            <button className="addToCartBttn" onClick={() => addToCart(data.id)}>
                Add To Cart
                {cartItemCount > 0 && <> ({cartItemCount})</>}
            </button>
        </div>
    )
}

export default Product