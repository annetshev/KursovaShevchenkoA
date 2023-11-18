import React, { useState, useEffect } from 'react'
import './UKRAINEpage.css'
import headerPhoto from '../../images/5475-1-scaled.jpg'
import headertexts from '../../images/Lesser_Coat_of_Arms_of_Ukraine.svg.png'
import headerfooters from '../../images/ukraine-evropaa.png'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import mark from '../../images/headermark.png'

const UKRAINEpage = () => {
    return(
        <div className='header'>
             <div className='head'>
                <h1>UKRAINE</h1>
                <BurgerMenu mark={mark} />
            </div>
            <div className='header__logo'>
            <img className='header__logo__img' src={headerPhoto} alt="headerPhoto" />
            </div>
            <div className='header__line'></div>
            <div className='header__texts'>
                <p>Україна, заснована в 1991 році, має довгу і багату історію, що включає Київську Русь та важливий внесок у світову культуру. Замріяні краєвиди Карпат, Чорнобильська зона відчуження та історичні пам'ятки роблять Україну унікальною. Історія України багата на впливи різних культур та імперій, таких як Київська Русь, Польща, Австро-Угорщина та Російська імперія. Після розпаду Радянського Союзу в 1991 році, Україна оголосила свою незалежність.</p>
                <img className='header__texts__img' src={headertexts} alt="headertexts" />
            </div>
            <div className='header__lines'></div>
            <div className='header__footers'>
            <img className='header__footers__img' src={headerfooters} alt="headerfooters" />
            </div>

        </div>
    )
}
export default UKRAINEpage