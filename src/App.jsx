import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import TestPage from './pages/TestPage'
import SignIn from './pages/SignIn'
import LogIn from './pages/LogIn'

const App = () => {

  useEffect(()=>{
    setTimeout(()=>{
       const user = JSON.parse(localStorage.getItem('user'))
       user.islogin=false
       localStorage.setItem('user',JSON.stringify(user))
    },30*60*1000)
  },[])
  
  return (
    <>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/testpage' element={<TestPage/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/login' element={<LogIn  />} />
      </Routes>
    </>
  )
}

export default App