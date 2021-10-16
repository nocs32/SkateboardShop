import React from 'react'
import Product from '../components/Product'

const Collection = () => {
  return (
    <section className='collection'>
      <div className='container'>
        <div className='collection__inner'>
          <div className='section__title'>
            <h3>
              <span>new</span>
              <br />
              collection
            </h3>
          </div>
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className='collection__wrap'>
          <a href='/' className='header__btn'>
            inspect
          </a>
        </div>
      </div>
    </section>
  )
}

export default Collection
