import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './components/ScrollTop'
function App() {

  return (
    <>
    <Header/>
    <div className='p-4'>
    <ScrollToTop />
        <Outlet />
      </div>
    </>
  )
}

export default App
