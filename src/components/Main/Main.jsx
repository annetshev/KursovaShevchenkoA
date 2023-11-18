import React, { useState, useEffect } from 'react'
import './main.css'
import mainPhoto from '../../images/Rectangle 7.png'
import mainPhotoAir from '../../images/Rectangle 10.png'
import mainPhotoInfo from '../../images/Rectangle 13.png'
import mainPhotoInfo2 from '../../images/Rectangle 14.png'
import mainPhotoInfo3 from '../../images/Rectangle 15.png'
import mainPhotoInfo4 from '../../images/Rectangle 16.png'
import mainPhotoFooter5 from '../../images/Rectangle 20.png'




const Main = () => {
    return (
      <div className='main'>
        <div className='main__logo'>
            <span>#UKRAINE</span>
            <span>#ЗСУ</span>
            <span>#WORLD</span>
            <span>#WAR WITH RUSSIA</span>
        </div>
        <div className='main__page'>
            <img className='main__page__img'src={mainPhoto} alt='mainPhoto'></img>
            <div className='main__page__text'>
                <p>ЗСУ — військове формування, на яке відповідно до Конституції України покладені завдання з оборони України, захист її сувернітету, територіальної цілісності та недоторканності</p>
            </div>
        </div>
        <div className='main__line'></div>
        <div className='main_photo'>
          <img className='main__photo__air'src={mainPhotoAir} alt='mainPhotoAir'></img>
        </div>
        <div className='main__lines'>
            <div className='main__lines__lines'></div>
            <div className='main__lines__linese'></div>
        </div>
        <div className='main__info'>
            <div className='main__info__f'>
                <img className='main__info__f__img'src={mainPhotoInfo} alt='mainPhotoInfo'></img>
                <a href='https://mil.in.ua/en/articles/weapons-for-f-16-what-bombs-and-missiles-ukraine-will-need/'>Зброя для F-16: Які бомби та ракети знадобляться Україні</a>
            </div>
            <div className='main__info__f'>
                <img className='main__info__f__img2'src={mainPhotoInfo2} alt='mainPhotoInfo2'></img>
                <a href='https://mil.in.ua/en/news/ukrainian-air-force-destroyed-russian-askold-warship/'>Українські ВПС знищили російський військовий корабель "Аскольд</a>
            </div>
            <div className='main__info__f'>
                <img className='main__info__f__img3'src={mainPhotoInfo3} alt='mainPhotoInfo3'></img>
                <a href='https://mil.in.ua/en/news/ukraine-orders-firearms-from-france/'>Україна замовляє вогнепальну зброю у Франції</a>
            </div>
            <div className='main__info__f'>
                <img className='main__info__f__img4'src={mainPhotoInfo4} alt='mainPhotoInfo4'></img>
                <a href='https://mil.in.ua/en/news/ukroboronprom-expands-production-of-fpv-drones/'>Укроборонпром розширює виробництво безпілотників FPV</a>
            </div>
            <div className='main__info__f__line'></div>
            <div className='main__info__f__lines'></div>
        </div>

        
        <div className='main__footer'>
            <div className='main__footer__line'></div>
            <div className='main__footer__block'>
             <img className='main__footer__img'src={mainPhotoFooter5} alt='mainPhotoFooter5'></img>
            </div>
            <div className='main__footer__vertical'></div>
            <div className='main__footer__list'>
                <a href='https://www.president.gov.ua/'>Президент України</a>
                <a href='https://www.kmu.gov.ua/'>Кабінет міністрів України</a>
                <a href='https://www.rada.gov.ua/'>Верховна рада України</a>
                <a href='https://www.mil.gov.ua/ministry/kerivnicztvo/'>МО України</a>
                <a href='https://uk.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%88%D1%82%D0%B0%D0%B1_%D0%97%D0%B1%D1%80%D0%BE%D0%B9%D0%BD%D0%B8%D1%85_%D1%81%D0%B8%D0%BB_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8'>ГШ України</a>
            </div>
            <div className='main__footer__verticales'></div>
            <div className='main__footer__listus'>
                <a href='https://www.president.gov.ua/'>President of Ukraine </a>
                <a href='https://www.kmu.gov.ua/'>Cabinet of Ministers of Ukraine</a>
                <a href='https://www.rada.gov.ua/'>Verkhovna Rada of Ukraine</a>
                <a href='https://www.mil.gov.ua/ministry/kerivnicztvo/'>Ministry of Defense of Ukraine</a>
                <a href='https://uk.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%88%D1%82%D0%B0%D0%B1_%D0%97%D0%B1%D1%80%D0%BE%D0%B9%D0%BD%D0%B8%D1%85_%D1%81%D0%B8%D0%BB_%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B8'>General Staff</a>
            </div>
        </div>
      </div>    
    )
  };
  export default Main