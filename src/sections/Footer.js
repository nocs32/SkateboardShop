import React from 'react'
import logo from '../images/logo-white.svg'
function Footer() {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='footer__inner'>
          <a className='footer__logo' href='/'>
            <img src={logo} alt='logo' />
          </a>
          <div className='footer__col'>
            <h6 className='footer__col--title'>contacts</h6>
            <a href='/' className='footer__col--link'>
              gmail.com
            </a>
            <a href='/' className='footer__col--link'>
              telegram
            </a>
          </div>
          <div className='footer__col'>
            <h6 className='footer__col--title'>contacts</h6>
            <a href='/' className='footer__col--link'>
              gmail.com
            </a>
            <a href='/' className='footer__col--link'>
              telegram
            </a>
          </div>
          <div className='footer__authors'>
            <p className='footer__info'>
              The concept of the store's website was created by the
              <br />
              <span>Kainox studio</span>
            </p>
            <span className='footer__copy'>©boardshop 2021</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
