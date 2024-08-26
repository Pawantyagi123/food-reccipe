import React, { useState } from 'react';
import './App.css';
import "./Components/css/Foodlist.css";
import Navbar from "./Components/Navbar";
import FoodRecipe from './Components/FoodRecipe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

export default function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/foodrecipe/:id' element={<FoodRecipe />} />
        </Routes>
      </Router>
    </div>
  );
}











