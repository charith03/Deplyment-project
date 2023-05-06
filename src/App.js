import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import {BrowserRouter, Routes , Route} from "react-router-dom"
import { Link } from 'react';
import Registration from './components/Registration';
import Front from './components/front';
import Navbar from './components/Navbar';
import About from './components/About';
import Service from './components/Service';
import Recent from './components/recent/Recent';
import Rent from './components/rent';
import Recent1 from './components/recent1/Recent1';
import Recent2 from './components/recent2/Recent2';

function App() {

  return (
    <div>
      <Navbar/>
      <BrowserRouter>
     <Routes>
              <Route path='/' element={<Front/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/reg' element={<Registration/>}/>
              <Route path='/about' element={<About/>}/> 
              <Route path='/service' element={<Service/>}/>
              <Route path='/recent' element={<Recent/>}/>  
              <Route path='/recent1' element={<Recent1/>}/>   
              <Route path='/recent2' element={<Recent2/>}/>   
              <Route path='/rent' element={<Rent/>}/>    
      </Routes>
        </BrowserRouter>
            
    </div>
  
   
  );
}

export default App;