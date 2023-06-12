import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'
import './shop.css'

const Shop = () => {
    return (
        <div className='shop'>
            <div className='shopTitle'>
                <h1>PedroTech Shop</h1>
            </div>
            <div className='products'>
                {PRODUCTS.map((product, i) => {
                    return <Product data={product} />
                })}
            </div>
        </div>
    )
}

export default Shop