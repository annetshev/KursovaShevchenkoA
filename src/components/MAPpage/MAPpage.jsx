import React, {useEffect } from 'react'
import './MAPpage.css'
import headerPhotoslider from '../../images/364050079_956306475594059_8642838032968070612_n.jpg'
import headerPhotoslider1 from '../../images/363490537_303544418833851_4477903371299850581_n.jpg'
import headerPhotoslider2 from '../../images/363498146_996125208084271_5468579105471631417_n.jpg'
import headerPhotoslider3 from '../../images/351043162_178837445115669_4360045683256896601_n.jpg'
import headerPhotoslider4 from '../../images/351266401_794733598629076_1095723796970532257_n.jpg'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import mark from '../../images/headermark.png'

const MAPpage = () => {
    let slideIndex = 0;

    useEffect(() => {

        function showSlides() {
            let i;
            let slides = document.getElementsByClassName("mySlides");
            let dots = document.getElementsByClassName("dot");
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

    function calculateTimeRemaining() {

        const targetDate = new Date('2022-02-24T00:00:00');
        const currentDate = new Date();
        let timeRemaining = currentDate - targetDate;
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

        return {
            days,
            hours,
            minutes,
        };
    }
    const remainingTime = calculateTimeRemaining();


    return (
        <div className='header'>
            <div className='head'>
                <h1>WAR</h1>
                <BurgerMenu mark={mark} />
            </div>

            <div className='header__slider'>
                <div className="slideshow-container">

                    <div className="mySlides fade">
                        <img className='header__slider__img' src={headerPhotoslider} alt="headerPhotoslider" />
                    </div>

                    <div className="mySlides fade">
                        <img className='header__slider__img' src={headerPhotoslider1} alt="headerPhotoslider1" />
                    </div>

                    <div className="mySlides fade">
                        <img className='header__slider__img' src={headerPhotoslider2} alt="headerPhotoslider2" />
                    </div>
                    <div className="mySlides fade">
                        <img className='header__slider__img' src={headerPhotoslider3} alt="headerPhotoslider3" />
                    </div>

                    <div className="mySlides fade">
                        <img className='header__slider__img' src={headerPhotoslider4} alt="headerPhotoslider4" />
                    </div>

                </div>
                <br></br>

                <div style={{ textAlign: "center" }}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
                <p>Повномасштабна війна в Україні розпочалася близько 05:00 24 лютого за наказом президента РФ Володимира Путіна.
                    Вторгнення стартувало з атаки на аеродроми, військові склади у Києві, Харкові та Дніпрі, а також на державний кордон на ділянці з Росією, Білоруссю та окупованим Кримом.</p>
            </div>
            <div className='header__line'></div>
            <div className='header__map'>
                <h2>Україна</h2>
                <p>Тримає оборону:<br /> {remainingTime.days} днів, {remainingTime.hours} годин, {remainingTime.minutes} хвилин</p>
                <div className="header__map_content">
                <iframe
                 title="deepstate"
                 src="https://deepstatemap.live/#6/49.438/32.053"
                 width="900"
                 height="600"
                 frameborder="0"
                 ></iframe>
                 </div>
            </div>
        </div >
    )
}
export default MAPpage