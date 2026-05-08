import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TestPage from './pages/TestPage'
import SignIn from './pages/SignIn'
import LogIn from './pages/LogIn'

const App = () => {
  const [isLogin,setLogin] = useState()
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/testpage' element={<TestPage/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/login' element={<LogIn isLogin={isLogin} setLogin={setLogin} />} />
      </Routes>
    </>
  )
}

export default App