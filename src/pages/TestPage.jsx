import React from 'react'
import NavBar from '../components/NavBar'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

const TestPage = () => {
  const [count ,setCount] = useState(0)
  const location = useLocation()
  const [apidata , setApiData]  = useState()
  const { path } = location.state || {}
   const fetchData = async ()=>{
       const res = await fetch(path)
       const data = await res.json()
        setApiData(data)
       console.log(data)
   }
   useEffect(()=>{
      fetchData()
   },[])
  return (
    <>
         <NavBar/>
          <div className='w-full min-h-screen  px-10 md:px-80 flex flex-col gap-10 py-30'>
                {apidata ? 
                <div>
                   <h1>Question {apidata[count].id}.    {apidata[count].question}</h1>
                   
              <div>  <input type="radio" id={`ques${apidata[count].options[0]}`} name={`ques${apidata[count].id}`} value='a' />  <label for={`ques${apidata[count].options[0]}`} > {apidata[count].options[0]}</label> </div>
            <div>  <input type="radio"  id={`ques${apidata[count].options[1]}`}   name={`ques${apidata[count].id}`} value='a' />   <label for={`ques${apidata[count].options[1]}`} >    {apidata[count].options[1]} </label> </div>
              <div>  <input type="radio"  id={`ques${apidata[count].options[2]}`}   name={`ques${apidata[count].id}`} value='a' />   <label for={`ques${apidata[count].options[2]}`} >   {apidata[count].options[2]} </label> </div>
               <div>  <input type="radio"  id={`ques${apidata[count].options[3]}`}   name={`ques${apidata[count].id}`} value='a' />  <label for={`ques${apidata[count].options[3]}`} >   {apidata[count].options[3]} </label> </div>
               <div className='mt-3 flex justify-start gap-20 md:px-30 '>
                  <button className='px-3 py-1 bg-green-700 text-white uppercase rounded ' onClick={()=>{
                    if(count<=0){
                      return toast('go forword')
                    }
                    setCount(count-1)
                 
                  }} >Prev</button>
                  <button className='px-3 py-1 bg-green-700 text-white uppercase rounded ' onClick={()=>{
                    if(count>49){
                      return toast('finished')
                    }
                    setCount(count+1)
                    }} >Next</button>
               </div>
                </div>
                
            : <h2>no data yet</h2>}
            <ToastContainer />
          </div>
    </>
  )
}

export default TestPage