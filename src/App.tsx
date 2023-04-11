import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieCardComponent from './components/MovieCardComponent';
import NavbarComponent from './components/NavbarComponent';
import RegisterComponent from './components/RegisterComponent';
import SignInComponent from './components/SignInComponent';
import WatchListComponent from './components/WatchListComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<SignInComponent/>}/>
          <Route path='/register' element={<RegisterComponent/>}/>
          <Route path='/watchList' element={<div><NavbarComponent/><WatchListComponent/></div>}/>
          <Route path='/movieCard' element={<div><MovieCardComponent/></div>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
