import React from 'react'
import './WORLDpage.css'
import headerPhoto from '../../images/world-wallpaper-3.jpg'
import headerPhotoInform from '../../images/231103-WA00061-1.jpg'
import headerPhotoInform2 from '../../images/Screenshot_1-13-1.png'
import headerPhotoINs from '../../images/Dania.jpg'
import headerPhotoINs2 from '../../images/368871062_809630477308672_4411112224514369089_n.jpg'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import mark from '../../images/headermark.png'


const WORLDpage=()=>{
    return(
        <div className='header'>
             <div className='head'>
                <h1>WORLD</h1>
                <BurgerMenu mark={mark} />
            </div>
           <div className='header__logo'>
           <img className='header__logo__img' src={headerPhoto} alt="headerPhoto" />
           </div>
           <div className='header__line'></div>

           <div className='header__information'>
              <div className='header__information__s'>
                  <img className='header__information__s__img' src={headerPhotoInform} alt="headerPhotoInform" />
                  <a>Іспанія розпочала підготовку екіпажу українського зенітно-ракетного комплексу "Яструб</a>
              </div>
              <div className='header__information__s'>
                <img className='header__information__s__img' src={headerPhotoInform2} alt="headerPhotoInform2" />
                <a>Іспанія розпочала підготовку екіпажу українського зенітно-ракетного комплексу "Яструб</a>
           </div>
           </div>
           <div className='header__lin'></div>
           <div className='header__in'>
             <div className='header__in__s'>
             <img className='header__in__s__img' src={headerPhotoINs} alt="headerPhotoINs" />
              <a>When first Russian missiles hit our cities, warning the world about the full-scale war in the middle of Europe, the risk was simply insane. The risk that Europe will again lose itself, as it had already happened in our history. It was a risk that tyranny would win again. It was a risk that the culture would lose again.</a>
             </div>
             <div className='header__in__s'>
             <img className='header__in__s__img' src={headerPhotoINs2} alt="headerPhotoINs2" />
              <a>The Ukrainian people are fighting for their freedom. The European Union stands by Ukraine's side in this brave fight. Today we discussed Ukraine’s progress on the path to the European Union and the EU’s steadfast support in the face of Russia’s aggression.</a>
             </div>

           </div>
    
        </div>
    )
}
export default WORLDpage