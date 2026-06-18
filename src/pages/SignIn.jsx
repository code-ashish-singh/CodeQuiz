import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate()
  const [otp, setOTP] = useState(null);
  const [userOTP, setuserOTP] = useState(null)
  const [signData, setSignData] = useState({
    name: "",
    email: "",
    password: "",
    islogin : false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!otp){
      return alert("Please send otp")
    }
   if(otp!=userOTP){
     setuserOTP(null)
    return alert("Enter valid otp")
   
   }
   
   localStorage.setItem('user',JSON.stringify(signData))
   alert('user registerd succesfully')
   navigate('/login')

  };
  const handleChange = (e) => {
    const {name, value} = e.target;
    setSignData({...signData,[name]:value})
  };
  const handleOTP = () => {
    const otp = Math.floor(Math.random() * 100);
    setOTP(otp)
    alert(otp);
  };
 

  return (
    <>
      <NavBar />
      <div className="h-[90vh] w-full flex justify-center items-center flex-col   ">
        <form
          className="border-2 border-gray-500 rounded-2xl px-10 py-20 text-center gap-5 flex flex-col "
          onSubmit={handleSubmit}
          action=""
        >
          <div className="w-full flex justify-between items-center">
            <label className="px-3 p-1 font-semibold text-lg" htmlFor="name">
              Enter Name
            </label>
            <input
              className="border-2 border-gray-800 rounded-md px-3 py-1 font-semibold uppercase"
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              placeholder="Enter Your Name"
              
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="px-3 p-1 font-semibold text-lg" htmlFor="email">
              Enter Email
            </label>
            <input
              className="border-2 border-gray-800 rounded-md px-3 py-1 font-semibold "
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              placeholder="Enter Your email"
              
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
              onChange={handleChange}
              placeholder="Enter Your password"
              
            />
          </div>
          <div className="w-full flex justify-between items-center">
            <label className="px-3 p-1 font-semibold text-lg" htmlFor="otp">
              Enter OTP{" "}
            </label>
            <input
              className="border-2 border-gray-800 rounded-md px-3 py-1 font-semibold "
              type="text"
            
              id="otp"
              name="otp"
              onChange={(e)=>{setuserOTP(e.target.value)}}
              placeholder="Enter Your password"
              
            />
          </div>
          <div className="flex flex-col gap-3">
            <button
              onClick={handleOTP}
              className="w-full bg-emerald-600 py-2 font-semibold text-white rounded-md"
             type="button"
            >
              {
                otp ? "Resend Otp" :"Send Otp"
              }
            </button>
            <button
              className="w-full bg-green-700 py-2 font-semibold text-white rounded-md"
              type="submit"
            >
              SignIn
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
