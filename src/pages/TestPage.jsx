import React, { act ,useRef } from 'react'
import NavBar from '../components/NavBar'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';


import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

const TestPage = () => {
  const [count ,setCount] = useState(0)
  const location = useLocation()
  const [apidata , setApiData]  = useState()
  const { path } = location.state || {}
  // const [ result , setResult] = useState([])
  const navigate = useNavigate()
    const [result , setResult] = useState(false)


  const [right,setRight] = useState(0)
  const [curVal,setCurVal] = useState(null)
  const handleChange = (e)=>{
     const {name,value} = e.target
     setCurVal(value)
      
  }
   const fetchData = async ()=>{
       const res = await fetch(path)
       const data = await res.json()
        setApiData(data)
       console.log(data)
   }
   const checkResult = (curVal,actVal)=>{
    console.log(curVal,actVal)
    // if(curVal === actVal){
    //   // result.push(true)
    //   console.log(true)
    //   let add = [...result , true]
    //   setResult(add)
    //   setCurVal(null)
    // }
    // else{
    //   setResult(result.push(false))
    //   setCurVal(null)
    // }
    if(curVal === actVal){
      setRight(right+1)
    }
   console.log(right)
    setResult(false)
        
   }

   const  checkUserLogin = ()=>{
    const userLogin = JSON.parse(localStorage.getItem('user'))
    if(!userLogin || !userLogin.islogin){
      return navigate('/login')
    }
   }

   useEffect(()=>{
     checkUserLogin()
      fetchData()
   },[])

    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
   const accept = () => {

        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have Submit', life: 3000 });
        setResult(true)
    }

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'Cancel', life: 3000 });
        
    }





   
  return (
    <>
         <NavBar/>

          <Toast ref={toast} />
            <ConfirmDialog
                group="declarative"
                visible={visible}
                onHide={() => setVisible(false)}
                message="Are you sure you want to Submit Test?"
                header="Confirmation"
                icon="pi pi-exclamation-triangle"
                accept={accept}
                reject={reject}
                style={{ width: '50vw' }}
                breakpoints={{ '1100px': '75vw', '960px': '100vw' }}
            />



          <div className='w-full min-h-screen  px-10 md:px-80 flex flex-col gap-10 py-30'>
                {apidata ? 
                <div>
                   <h1>Question {apidata[count].id}.    {apidata[count].question}</h1>
                   
              <div> 
                 <input
                  type="radio" 
                  id={`ques${apidata[count].options[0]}`} 
                  name={`ques${apidata[count].id}`} 
                  value={`${apidata[count].options[0]}`}
                  onChange={handleChange}
                  /> 
                  <label 
                  htmlFor={`ques${apidata[count].options[0]}`} >
                     {apidata[count].options[0]}
                     </label>
               </div>
            <div>
                <input 
                type="radio"  
                id={`ques${apidata[count].options[1]}`}   
                name={`ques${apidata[count].id}`} 
                value={`${apidata[count].options[1]}`} 
                onChange={handleChange}
                />  
                 <label 
                 htmlFor={`ques${apidata[count].options[1]}`} > 
                 {apidata[count].options[1]} 
                 </label> 
              </div>
              <div> 
                 <input 
                 type="radio"  
                 id={`ques${apidata[count].options[2]}`}   
                 name={`ques${apidata[count].id}`} 
                 value={`${apidata[count].options[2]}`}
                 onChange={handleChange}
                  /> 
                  <label 
                  htmlFor={`ques${apidata[count].options[2]}`} >
                    {apidata[count].options[2]} 
                  </label>
               </div>
               <div> 
                 <input 
                 type="radio"  
                 id={`ques${apidata[count].options[3]}`}   
                 name={`ques${apidata[count].id}`} 
                 value={`${apidata[count].options[3]}`}
                 onChange={handleChange} 
                 /> 
               <label 
               htmlFor={`ques${apidata[count].options[3]}`} >   
               {apidata[count].options[3]} 
               </label> 
                 </div>
               <div className='mt-3 flex justify-start gap-20 md:px-30 '>
                 {apidata[count].id== 50 ? <button 
                 onClick={()=>{
                  setVisible(true)
                  
                 }}
                 className='w-full bg-red-700 py-2 rounded text-white font-semibold text-lg '>
                  Submit</button>  
                   : <> 
                   <button 
                  className='px-3 py-1 bg-green-700 text-white uppercase rounded ' 
                  onClick={()=>{
                    if(count<=0){
                     
                      return toast('go forword')
                    }
                     checkResult(curVal,apidata[count].answer)
                    setCount(count-1)
                 
                  }} >
                    Prev</button>
                  <button 
                  className='px-3 py-1 bg-green-700 text-white uppercase rounded ' 
                  onClick={()=>{
                    if(count>49){
                     
                      return toast('finished')
                    }
                     checkResult(curVal,apidata[count].answer)
                    setCount(count+1)
                    }} >
                    Next</button></>}
               </div>
                </div>
                
            : <h2>no data yet</h2>}
            {
              result ? `Result is 
           ${right} out of 50` : ""
            }
            <ToastContainer />
            
          </div>
    </>
  )
}

export default TestPage