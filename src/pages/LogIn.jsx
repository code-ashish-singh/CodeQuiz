import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [loginData,setLoginData] = useState({
    email : "",
    password : ""
  })
  const navigate = useNavigate('')
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData)
  
    const userData = JSON.parse(localStorage.getItem('user'))
    console.log(userData)
    if(loginData.email != userData.email || loginData.password != userData.password){
      return alert('please Enter valid email or password')
    }

    userData.islogin  = true
    localStorage.setItem('user',JSON.stringify(userData))
    alert('Login successful')
    navigate('/')

  };
  const handleChange = (e) => {
    const {name,value} =  e.target
    setLoginData({...loginData,[name]:value})
  };
  useEffect(()=>{
     if(!localStorage.getItem('user')){
      navigate('/signin')
     }
  },[])
  return (
    <>
      <>
        <NavBar />
        <div className="h-[90vh] w-full flex justify-center items-center flex-col   ">
          <form
            className="border-2 border-gray-500 rounded-2xl px-10 py-20 text-center gap-5 flex flex-col "
            onSubmit={handleSubmit}
            action=""
          >
            <div className="w-full flex justify-between items-center">
              <label className="px-3 p-1 font-semibold text-lg" htmlFor="email">
                Enter Email
              </label>
              <input
                className="border-2 border-gray-800 rounded-md px-3 py-1 font-semibold "
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                placeholder="Enter Your email"
               required
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <label
                className="px-3 p-1 font-semibold text-lg"
                htmlFor="password"
              >
                Enter Pasword
              </label>
              <input
                className="border-2 border-gray-800 rounded-md px-3 py-1 font-semibold "
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter Your password"
                required
              />
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="w-full bg-green-700 py-2 font-semibold text-white rounded-md"
                type="submit"
              >
                LogIn
              </button>
            </div>
          </form>
        </div>
      </>
    </>
  );
};

export default LogIn;
