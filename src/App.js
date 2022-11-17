
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { AboutUs } from './Components/About-Us/About-Us';
import { Contact } from './Components/Contact/Contact';
import { Home } from './Components/Home/Home';
import { Jobs }  from './Components/Jobs/Jobs';



export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/jobs' element={<Jobs/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path="/about-us" element={<AboutUs/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

