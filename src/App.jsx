import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TestPage from './pages/TestPage'

const App = () => {
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/testpage' element={<TestPage/>} />
      </Routes>
    </>
  )
}

export default App