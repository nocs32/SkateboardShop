import React from 'react'
import bg from '../images/a-bg.jpg'

function Advantages() {
  return (
    <section className='advantages'>
      <div className='container'>
        <div className='advantages__inner'>
          <div className='section__title'>
            <h3>
              <span>our</span>
              <br />
              advantages
            </h3>
          </div>
          <div className='advantages__content'>
            <div className='advantages__box'>
              <h5 className='advantages__title'>quality</h5>
              <p className='advantages__text'>
                Official <span>brands</span> only
              </p>
            </div>
            <div className='advantages__box'>
              <h5 className='advantages__title'>delivery</h5>
              <p className='advantages__text'>
                Free delivery from <span>$89</span>
              </p>
            </div>
            <div className='advantages__box'>
              <h5 className='advantages__title'>reliability</h5>
              <p className='advantages__text'>
                More than <span>5 years</span> on the market
              </p>
            </div>
            <div className='advantages__box'>
              <h5 className='advantages__title'>choice</h5>
              <p className='advantages__text'>
                More than <span>1000 products</span> in stock
              </p>
            </div>
            <div className='advantages__box'>
              <h5 className='advantages__title'>guarantee</h5>
              <p className='advantages__text'>
                14 days <span>exchange</span> and <span>return</span> guarantee
              </p>
            </div>
          </div>
          <img src={bg} alt='' className='advantages__bg' />
        </div>
      </div>
    </section>
  )
}

export default Advantages
