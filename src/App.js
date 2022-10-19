import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Formdata from './forms';
import Report from './report';
const App =(event)=>{
  
  // function to print data
  
  return(
    <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Formdata/>}/>
      <Route path='/report' element={<Report/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
  
      
      
  )
}
export default App;