import React, { useState } from 'react'
import NavBar from '../components/NavBar'

const SignIn = () => {
  const [otp ,setOTP] = useState(null)
  const [signData,setSignData] = useState({
    name : "",
    email : "",
    email : "",
  })

  const handleSubmit = (e)=>{
    
      e.preventDefault()
      if(otp){
        alert('verify')
      }
      else{
        return alert('please Enter OTP')
      }
  }
  const handleChange = ()=>{
    const [name,value] = e.target
  }
  const handleOTP = ()=>{
    const otp = Math.floor(Math.random()*1000000)
    alert(otp)
  }

  return (
    <>
          <NavBar/>
          <div className='h-[90vh] w-full flex justify-center items-center flex-col   '>
                   <form className='border-2 border-gray-500 rounded-2xl px-10 py-20 text-center gap-5 flex flex-col '  onSubmit={handleSubmit} action="">
              <div className='w-full flex justify-between items-center'>
                <label className='px-3 p-1 font-semibold text-lg' htmlFor="name">Enter Name</label>
                <input className='border-2 border-gray-800 rounded-md px-3 py-1 font-semibold uppercase' type="text" id='name' name="name" onChange={handleChange} placeholder='Enter Your Name' defaultValue="xyz" />
              </div>
              <div className='w-full flex justify-between items-center' >
                <label className='px-3 p-1 font-semibold text-lg'  htmlFor="email">Enter Email</label>
                <input className='border-2 border-gray-800 rounded-md px-3 py-1 font-semibold ' type="email" id='email' name="email" onChange={handleChange} placeholder='Enter Your email' defaultValue="xyz@gmail.com" />
              </div>
              <div className='w-full flex justify-between items-center' >
                <label className='px-3 p-1 font-semibold text-lg'  htmlFor="password">Enter Pasword</label>
                <input className='border-2 border-gray-800 rounded-md px-3 py-1 font-semibold ' type="password" id='password' name="password" onChange={handleChange} placeholder='Enter Your password' defaultValue="..." />
              </div>
               <div className='w-full flex justify-between items-center' >
                <label className='px-3 p-1 font-semibold text-lg'  htmlFor="otp">Enter OTP </label>
                <input className='border-2 border-gray-800 rounded-md px-3 py-1 font-semibold ' type="text"      max={6}  id='otp' name="otp" onChange={handleChange} placeholder='Enter Your password' defaultValue="..." />
              </div>
             <div className='flex flex-col gap-3'>
               <button onClick={handleOTP} className='w-full bg-emerald-600 py-2 font-semibold text-white rounded-md' type='submit'>Send OTP</button>
              <button className='w-full bg-green-700 py-2 font-semibold text-white rounded-md' type='submit'>SignIn</button>
             </div>
        </form>
          </div>
       
    </>
  )
}

export default SignIn