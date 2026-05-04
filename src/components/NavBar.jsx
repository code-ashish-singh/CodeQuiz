import React from 'react'

const NavBar = () => {
  return (
    <>
         <nav className='w-full h-20 bg-sky-600 flex justify-between px-10 items-center '>
             <h1><span className='font-semibold text-xl'>Code</span> <span className='text-white text-xl font-[cursive]'>Quiz</span></h1>
            <div className='flex gap-5
            '>
                <button className='px-3 py-1 bg-green-500 font-semibold cursor-pointer rounded text-white text-lg '>LogIn</button>
                 <button className='px-3 py-1 bg-green-500 font-semibold cursor-pointer rounded text-white text-lg '>SignIn</button>
                
            </div>
         </nav>
    </>
  )
}

export default NavBar