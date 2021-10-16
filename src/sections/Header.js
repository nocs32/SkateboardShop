import React from 'react'
import Navbar from '../components/Navbar'
import { AiFillInstagram, AiOutlineBehanceSquare } from 'react-icons/ai'
import { RiTelegramLine } from 'react-icons/ri'
import bg from '../images/intro-bg.jpg'

function Header() {
  return (
    <section className='header'>
      <Navbar />
      <div className='container'>
        <div className='header__inner'>
          <div className='header__socials'>
            <a className='header__socials-link' href='/'>
              <AiFillInstagram />
            </a>
            <a className='header__socials-link' href='/'>
              <RiTelegramLine />
            </a>
            <a className='header__socials-link' href='/'>
              <AiOutlineBehanceSquare />
            </a>
          </div>
          <div className='header__intro'>
            <img className='header__bg' src={bg} alt='bg' />
            <h1 className='header__title'>
              <span>summer 2021</span>
              <br></br>skating boards
            </h1>
            <h6 className='header__subtitle'>new collection</h6>
            <a href='/' className='header__btn'>
              inspect
            </a>
          </div>
          <div className='header__menu'>
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
      </div>
    </section>
  )
}

export default Header
