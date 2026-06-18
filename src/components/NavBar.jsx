import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isLogin, setisLogin] = useState(false);
  const [isSign, setSign] = useState(false);
  
  const navigate = useNavigate();
  const logout = ()=>{
    const user = JSON.parse(localStorage.getItem('user'))
    user.islogin = false 
    localStorage.setItem('user',JSON.stringify(user))
    navigate('/login')
  }
  useEffect(()=>{
      const user = JSON.parse(localStorage.getItem('user'))
      if(user){
        console.log(true)
        setSign(true)
          if(!user.islogin){
        console.log(true)
        setisLogin(false)
      }
      else{
         console.log(false)
        setisLogin(true)
      }
      }
      else{
        console.log(false)
        setSign(false)
      }
    
  },[])

  
  return (
    <>
      <nav className="w-full h-20 bg-sky-600 flex justify-between px-2 md:px-10 items-center ">
        <h1 onClick={()=>{
          navigate('/')
        }}>
          <span className="font-semibold text-xl">Code</span>{" "}
          <span className="text-white text-xl font-[cursive]">Quiz</span>
        </h1>
        <div
          className="flex gap-5
            "
        >
          <button
            onClick={() => {
              navigate("/login");
            }}
            className={`px-3 py-1 bg-green-500 font-semibold cursor-pointer rounded text-white text-lg ${!isLogin ? "block" : "hidden" } `}
          >
            login
          </button>
          <button
            onClick={() => {
              navigate("/signin");
            }}
            className={`px-3 py-1 bg-green-500 font-semibold cursor-pointer rounded text-white text-lg ${!isSign ? "block" : "hidden" } `}
          >
            SignIn
          </button>
          <button
            onClick={() => {
              logout()
            }}
            className={`px-3 py-1 bg-red-500 font-semibold cursor-pointer rounded text-white text-lg ${!isLogin ? "hidden" : "block" } `}
          >
            logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
