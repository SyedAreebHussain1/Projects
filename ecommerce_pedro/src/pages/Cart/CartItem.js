import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context'

const CartItem = ({data}) => {
    const { removeFromCart, cartItems } = useContext(ShopContext)

  return (
    // <div className='cartItem'>CartItem</div>
    <div className='product'>
            <img src={data?.productImage} alt='' />
            <div className='description'>
                <p><b>{data?.productName}</b>  </p>
                <p>${data?.price}</p>
            </div>

            <button className="addToCartBttn" onClick={() => removeFromCart(data.id)}>
                Add To Cart
                {/* {cartItemCount > 0 && <> ({cartItemCount})</>} */}
            </button>
        </div>
  )
}

export default CartItem