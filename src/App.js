import React, { useEffect, useState } from 'react';

import data from './data/data.json'
import './App.css';
import Header from './components/Header/Header';
import CourseShop from './components/Header/CourseShop/CourseShop';

function App() {
 
  return (
    <div>
       <Header></Header>
       <CourseShop></CourseShop>
    </div>   
  );
}

export default App;
