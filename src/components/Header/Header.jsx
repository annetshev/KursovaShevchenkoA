import React from 'react'
import headerPhoto from '../../images/coldiers 1.png'
import mark from '../../images/headermark.png'
import flag from '../../images/headerflag.png'
import './header.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const Header = () => {
  return (
    <div className='header'>
      <img className='header__background' src={headerPhoto} alt="headerPhoto" />
      <div className='header__top'>
        <div className='header__leftside'>
          <img src={mark} alt="mark" />
          <img src={flag} alt="flag" />
          <div className='header__title'>
            <h1>UKRAINE</h1>
            <h1>Збройні сили України</h1>
          </div>
        </div> 
        <BurgerMenu mark={mark}/>       
      </div>
    </div>
  )
};
export default Header
