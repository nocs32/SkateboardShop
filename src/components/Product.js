import React from 'react'
import p1 from '../images/p1.jpg'

function Product() {
  return (
    <div className='product'>
      <a href='/' className='product__link'>
        <img src={p1} alt='' className='product__img' />
        <p className='product__name'>
          Longboard Landyachtz Butter - Black Lines
        </p>
        <span className='product__price'>$289</span>
      </a>
    </div>
  )
}

export default Product
