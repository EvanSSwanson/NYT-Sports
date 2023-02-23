import './App.css';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../Header/Header';
import MainView from '../MainView/MainView'

function App() {
  return (
    <div className='App'>
      <Header />
      <MainView />
    </div>
  );
}

export default App;
