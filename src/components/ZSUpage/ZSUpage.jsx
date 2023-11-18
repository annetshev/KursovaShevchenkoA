import React, { useState, useEffect } from 'react'
import './ZSUpage.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import headerPhoto from '../../images/tank.jpg'
import textPhoto from'../../images/kon.jpeg'
import textPhotoFoot from '../../images/okop.jpg'
import mark from '../../images/headermark.png'
import headerphotoslider from '../../images/tank.jpg'
import headerphotoslider1 from '../../images/shine.jpg'
import headerphotoslider2 from '../../images/ship.jpg'
import headerphotoslider3 from '../../images/bpla.jpg'








const ZSUpage = () => {
    let slideIndex = 0;
    useEffect(() => {

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("myslide");
            let dots = document.getElementsByClassName("dots");
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1 }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            console.log('one');
        }
        showSlides();
        const timerId = setInterval(showSlides, 2000);

        return () => {
            clearInterval(timerId);
        }
    }, [])


    return(

        <div className='header'>
            <div className='head'>
                <h1>ЗСУ</h1>
                <BurgerMenu mark={mark} />
            </div>

            <div className='header__sliders'>
                <div className="slideshow-containers">

                    <div className="myslide fade">
                        <img className='header__sliders__photo' src={headerphotoslider} alt="headerphotoslider" />
                    </div>

                    <div className="myslide fade">
                        <img className='header__sliders__photo' src={headerphotoslider1} alt="headerphotoslider1" />
                    </div>

                    <div className="myslide fade">
                        <img className='header__sliders__photo' src={headerphotoslider2} alt="headerphotoslider2" />
                    </div>
                    <div className="myslide fade">
                        <img className='header__sliders__photo' src={headerphotoslider3} alt="headerphotoslider3" />
                    </div>
                </div>
            </div>    
                <br></br>

                <div style={{ textAlign: "center" }}>
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span>
                    <span className="dots"></span>
                </div>

            
            <div className='header__line'></div>
            <div className='header__text'>
                <p>Основна армійська сила та складова частина національної безпеки України.
                ЗСУ сформовані після отримання Україною незалежності у 1991 році, спадкоємці радянських збройних сил.
                </p>
                <img className='header__text__img' src={textPhoto} alt="textPhoto" />
            </div>
            <div className='header__line'></div>
            <div className='header__foot'>
            <img className='header__foot__img' src={textPhotoFoot} alt="textPhotoFoot" />  
            </div>
            <div className='header__textse'>
            <p>Задачі та функції: Забезпечення обороноздатності країни, участь у миротворчих місіях, ліквідація наслідків надзвичайних ситуацій.</p>
            <p>Структура: Складаються з ЗСУ Сухопутних військ, ВМС, Повітряних сил, та інших служб та підрозділів.</p>
            </div>
            <div className='header__line'></div>
            <div className='header__video'>
                <video loop="loop" className='header__video__vid' controls autoPlay >
                  <source  src="./video/video.mp4" type="video/mp4" />
                </video>
            </div>

        </div>
        
    )

}
export default ZSUpage
