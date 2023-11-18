import React, { useState, useEffect } from 'react'
import './burgerMenu.css'
import { Link } from 'react-router-dom'

const BurgerMenu = ({mark = null}) => {

  const [bar_class, setBurgerClass] = useState("burger-bar unclicked")
  const [menu_class, setMenuClass] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked")
      setMenuClass("menu visible")
    }
    else {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <div className='burger__menu' onClick={updateMenu}>
        <div className={bar_class} ></div>
        <div className={bar_class} ></div>
        <div className={bar_class} ></div>
      </div>
      <div className={menu_class}>
        <img src={mark} alt="mark" />
        <div className='menu__nav'>
          <Link to='/'>Головна</Link>
          <Link to="/ukraine">Україна</Link>
          <Link to="/zsu">ЗСУ</Link>
          <Link to='/map'>Карта бойових дій</Link>
          <Link to='/world'>Світ</Link>
        </div>
      </div>
    </>
  )
};

export default BurgerMenu
