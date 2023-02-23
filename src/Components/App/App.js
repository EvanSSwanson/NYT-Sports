import './App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { fetchData, objectLayout } from '../../apiCalls'
import Header from '../Header/Header'
import MainView from '../MainView/MainView'
import DetailedView from '../DetailedView/DetailedView'

const App = () => {
  const [articles, setArticles] = useState([])
  const [selected, setSelected] = useState(objectLayout)
  const [searchInput, setSearchInput] = useState('')



  const loadData = () => {
    fetchData()
    .then(data => {
      setArticles(data.results)})
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<MainView articles={articles} setSelected={setSelected} searchInput={searchInput} setSearchInput={setSearchInput}/>}/>
        <Route path='/article' element={< DetailedView article={selected}/>} />
        {/* error route */}
      </Routes>
    </div>
  );
}

export default App
