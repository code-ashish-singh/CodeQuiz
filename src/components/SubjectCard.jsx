import React from 'react'
import { useNavigate } from 'react-router-dom'
const SubjectCard = ({image,subject,path}) => {
  const navigate = useNavigate()
  return (
    <>
          <div className='h-60 w-50 border-2 border-gray-600 rounded-xl flex justify-center gap-2 items-center flex-col gap-5  '>
                   <div className='size-20 rounded-full border-2 flex justify-center items-center'>
                        <img className='size-[80%] rounded-full' src={image} alt="" />
                   </div>
                   <h1 className='font-semibold uppercase'>{subject}</h1>
                  
                    {/* <meter value={18} max={20} min={5}></meter>
                    <h4>75% Compeleted</h4> */}
                    <button
                    className='px-15 py-2 rounded-xl bg-black text-white cursor-pointer '
                    onClick={()=>{
                      navigate('/testpage',{
                        state : {
                          path
                        }
                      })
                    }}
                    >Start Quiz
                    </button>
          </div>
    </>
  )
}

export default SubjectCard