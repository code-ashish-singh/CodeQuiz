import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData] = useState(0)
  const [quizData , setQuizData] = useState([])

  const fetchData = async ()=>{
     const res = await fetch('/public/QuizApi.json')
     const deta = await res.json()
    setQuizData(prev=>[...deta,...prev])
   
    
  }
useEffect(()=>{
 
  console.log(quizData.length);
  
  fetchData()
},[])
  return ( 
   <>
       {data == 10 ? 'oyee 10 ye upar q jaa raha hai ': 'no value'}
      <div className='text-center flex flex-col items-center gap-10'>
        <h1 className='text-center'>{data}</h1>
      <button className='px-3 py-1 bg-green-600 mx-2 text-white' onClick={()=>{setData(data+1)}}>increment</button>
      <button className='px-3 py-1 bg-green-600 mx-2 text-white' onClick={()=>{setData(data-1)}}>decrement</button>
        
      </div>

       <button  className='bg-green-600 px-3 py-1 rounded text-white text-center '>Start text</button>

       <div className='w-full h-[60vh] bg-red-300 flex justify-center items-center '>

        <div className='h-[80%] w-[50%] bg-white flex justify-center items-start flex-col px-50 relative '>
               <h1 className='text-black font-semibold text-xl '> {data+1}.   {quizData.length <= 0 ? "here is no data" : quizData[data].question } </h1>  
                <h4> {quizData.length <= 0 ? "here is no data" : quizData[data].options[2] } </h4>
                <h4> {quizData.length <= 0 ? "here is no data" : quizData[data].options[0] } </h4>
                <h4> {quizData.length <= 0 ? "here is no data" : quizData[data].options[1] } </h4>
                <h4> {quizData.length <= 0 ? "here is no data" : quizData[data].options[3] } </h4>
                <div className='w-full flex justify-around absolute bottom-10 left-0'>
                      <button
                      onClick={()=>{
                        if(data<=0){
                          return alert('no question yet')
                        }
                        setData(data-1)
                      }}
                       className='px-10 py-1 text-lg text-white font-semibold rounded bg-blue-500'>Prev</button>
                      <button className='px-10 py-1 text-lg text-white font-semibold rounded bg-green-500'>Submit</button>
                      <button 
                      onClick={()=>{
                        if(data>= quizData.length){
                        return  alert('this is last question ')
                        }
                        setData(data+1)
                      }}
                      className='px-10 py-1 text-lg text-white font-semibold rounded bg-blue-500' >Next</button>
                </div>
        </div>
       </div>
   </>
  )
}

export default App