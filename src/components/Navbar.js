import React, { useState } from 'react'
import logo from '../images/logo.svg'
import { HiLocationMarker } from 'react-icons/hi'
import {
  AiFillQuestionCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai'
import { BsBagFill } from 'react-icons/bs'
import { GrClose, GrFormClose } from 'react-icons/gr'
import { FaBars } from 'react-icons/fa'
import cartitem from '../images/cart-item.png'

function Navbar() {
  const [help, setHelp] = useState(false)
  const [sidecart, setSidecart] = useState(false)
  const [aside, setAside] = useState(false)
  const showAside = () => setAside(!aside)
  const showHelp = () => setHelp(!help)
  const showSidecart = () => setSidecart(!sidecart)
  return (
    <>
      <div className='container'>
        <div className='header__top'>
          <a className='header__logo' href='/'>
            <img src={logo} alt='logo' />
          </a>
          <div className='header__geo'>
            <HiLocationMarker />
            <span className='header__geo--name'>ukraine</span>
          </div>
          <nav className='header__nav'>
            <a href='/' className='header__nav--link header__nav--link-left'>
              new collection
            </a>
            <a href='/' className='header__nav--link'>
              store
            </a>
            <a href='/' className='header__nav--link'>
              lookbook
            </a>
          </nav>
          <div className='header__lang'>
            <a
              href='/'
              className='header__lang--link header__lang--link-active'
            >
              en
            </a>
            <a href='/' className='header__lang--link'>
              ru
            </a>
          </div>
          <div className='header__help'>
            <button className='header__faq' onClick={showHelp}>
              <AiFillQuestionCircle />
            </button>
            <button className='header__cart' onClick={showSidecart}>
              <BsBagFill />
            </button>
            <div
              className={
                help
                  ? 'header__help--menu header__help--menu-active'
                  : 'header__help--menu'
              }
            >
              <a href='/' className='header__help-link'>
                Contact
              </a>
              <a href='/' className='header__help-link'>
                Delivery / payment
              </a>
            </div>
            <button className='header__sidebar' onClick={showAside}>
              <FaBars />
            </button>
            <aside
              className={
                aside ? 'header__aside header__aside--active' : 'header__aside'
              }
            >
              <div className='header__aside--inner'>
                <a
                  href='#'
                  className='header__aside--close'
                  onClick={showAside}
                >
                  <GrFormClose />
                </a>
                <div className='header__menu header__menu--aside'>
                  <a href='/' className='header__menu-link'>
                    new collection
                  </a>
                  <a href='/' className='header__menu-link'>
                    plastboard
                  </a>
                  <a href='/' className='header__menu-link'>
                    skateboard
                  </a>
                  <a href='/' className='header__menu-link'>
                    longboard
                  </a>
                  <a href='/' className='header__menu-link'>
                    accessories
                  </a>
                  <a href='/' className='header__menu-link'>
                    merch
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <aside className={sidecart ? 'sidecart sidecart--active' : 'sidecart'}>
        <div
          className={
            sidecart
              ? 'sidecart__inner sidecart__inner--active'
              : 'sidecart__inner'
          }
        >
          <button className='sidecart__close' onClick={showSidecart}>
            <GrClose />
          </button>
          <div className='sidecart__item'>
            <img src={cartitem} alt='' />
            <div className='sidecart__info'>
              <div className='row sb'>
                <h6 className='sidecart__title'>Product name</h6>
                <button className='sidecart__remove'>remove</button>
              </div>
              <div className='row'>
                <span className='sidecart__pos'>Color</span>
                <span className='sidecart__res'>Black Lines</span>
              </div>
              <div className='row'>
                <span className='sidecart__pos'>Size</span>
                <span className='sidecart__res'>22 inch</span>
              </div>
              <div className='row sb'>
                <span className='sidecart__pos'>Qty</span>
                <div className='sidecart__qty'>
                  <button className='sidecart__btn sidecart__minus'>
                    <AiOutlineMinus />
                  </button>
                  <span className='sidecart__qty--number'>1</span>
                  <button className='sidecart__btn sidecart__plus'>
                    <AiOutlinePlus />
                  </button>
                </div>
                <span className='sidecart__subprice'>$198</span>
              </div>
            </div>
          </div>
          <div className='sidecart__item'>
            <img src={cartitem} alt='' />
            <div className='sidecart__info'>
              <div className='row sb'>
                <h6 className='sidecart__title'>Product name</h6>
                <button className='sidecart__remove'>remove</button>
              </div>
              <div className='row'>
                <span className='sidecart__pos'>Color</span>
                <span className='sidecart__res'>Black Lines</span>
              </div>
              <div className='row'>
                <span className='sidecart__pos'>Size</span>
                <span className='sidecart__res'>22 inch</span>
              </div>
              <div className='row sb'>
                <span className='sidecart__pos'>Qty</span>
                <div className='sidecart__qty'>
                  <button className='sidecart__btn sidecart__plus'>
                    <AiOutlineMinus />
                  </button>
                  <span className='sidecart__qty--number'>1</span>
                  <button className='sidecart__btn sidecart__plus'>
                    <AiOutlinePlus />
                  </button>
                </div>
                <span className='sidecart__subprice'>$198</span>
              </div>
            </div>
          </div>
          <div className='sidecart__item'>
            <img src={cartitem} alt='' />
            <div className='sidecart__info'>
              <div className='row sb'>
                <h6 className='sidecart__title'>Product name</h6>
                <button className='sidecart__remove'>remove</button>
              </div>
              <div className='row'>
                <span className='sidecart__pos'>Color</span>
                <span className='sidecart__res'>Black Lines</span>
              </div>
              <div className='row'>
                <span className='sidecart__pos'>Size</span>
                <span className='sidecart__res'>22 inch</span>
              </div>
              <div className='row sb'>
                <span className='sidecart__pos'>Qty</span>
                <div className='sidecart__qty'>
                  <button className='sidecart__btn sidecart__plus'>
                    <AiOutlineMinus />
                  </button>
                  <span className='sidecart__qty--number'>1</span>
                  <button className='sidecart__btn sidecart__plus'>
                    <AiOutlinePlus />
                  </button>
                </div>
                <span className='sidecart__subprice'>$198</span>
              </div>
            </div>
          </div>
          <div className='sidecart__sum'>
            <div className='row'>
              <span className='sidecart__subtotal'>Subtotal</span>
              <span className='sidecart__subtotal--number'>$240</span>
            </div>
            <div className='row'>
              <span className='sidecart__discount'>Discount</span>
              <span className='sidecart__discount--number'>$15</span>
            </div>
            <div className='row'>
              <span className='sidecart__total'>Total</span>
              <span className='sidecart__total--number'>$225</span>
            </div>
          </div>
          <a href='/' className='sidecart__checkout'>
            checkout
          </a>
        </div>
      </aside>
    </>
  )
}

export default Navbar
