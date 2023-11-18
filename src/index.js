import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import HomePage from './pages/HomePage.jsx';
import WorldPage from './pages/WorldPage';
import UkrainePage from './pages/UkrainePage';
import ZSUPage from './pages/ZSUPage';
import MapPage from './pages/MapPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/world' element={<WorldPage/>}/>
      <Route path='/ukraine' element={<UkrainePage/>}/>
      <Route path='/zsu' element={<ZSUPage/>}/>
      <Route path='/map' element={<MapPage/>}/>
    </Routes>
  </BrowserRouter>
);

