import React, { useState, useEffect } from 'react'
import './NEWSpage.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import mark from '../../images/headermark.png'
import ADDnews from '../ADDnews/ADDnews'
import NewsCard from '../NewsCardComponent/NewsCard'
import { newsApi } from '../../db/api.js';
import httpNews from '../../http-requests/http-news.js'

const NEWSpage = () => {
  const [showAddNewsModal, setShowAddNewsModal] = useState(false);
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await httpNews.getAllNews();
        setNewsList(response.data);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowAddNewsModal = () => {
    setShowAddNewsModal(true);
  };

  const handleCloseAddNewsModal = () => {
    setShowAddNewsModal(false);
  };

  const handleAddNews = (news) => {
    setNewsList([...newsList, news]);
  };

  return (
    <div className='header'>
    <div className='head'>
      <h1>Новини<br></br></h1>
      <BurgerMenu mark={mark} />
      </div>
      <>
      <ADDnews show={showAddNewsModal} handleClose={handleCloseAddNewsModal} onDone={handleAddNews} />
        <div className="header__news-container">
          {newsList.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>
        <div className="header__btn-bottom">
          <button className="header__buttons" onClick={handleShowAddNewsModal}>
            Додати новини
          </button>
        </div>
        </>  
  </div>
)}
export default NEWSpage