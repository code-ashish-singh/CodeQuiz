import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import SubjectCard from '../components/SubjectCard'

const Home = () => {
  const [islogIn,setLogIn] = useState(false)

  const subjectCardInfo = [
  {
    "id": 1,
    "subject": "HTML",
    "description": "HyperText Markup Language - The standard markup language for creating web pages.",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
  },
  {
    "id": 2,
    "subject": "CSS",
    "description": "Cascading Style Sheets - Used for describing the presentation of a document written in HTML.",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
  },
  {
    "id": 3,
    "subject": "JavaScript",
    "description": "A high-level, interpreted programming language that conforms to the ECMAScript specification.",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
  },
  {
    "id": 4,
    "subject": "Java",
    "description": "A class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
    "image_url": "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg"
  },
  {
    "id": 5,
    "subject": "Python",
    "description": "An interpreted, high-level and general-purpose programming language known for its readability.",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
  },
  {
    "id": 6,
    "subject": "PHP",
    "description": "A popular general-purpose scripting language that is especially suited to web development.",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg"
  },
  {
    "id": 7,
    "subject": "SQL",
    "description": "Structured Query Language - Used for managing data held in a relational database management system.",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png"
  },
  {
    "id": 8,
    "subject": "MongoDB",
    "description": "A source-available cross-platform document-oriented database program.",
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
  }


]





  return (
    <>
       <NavBar/>
      {
        islogIn ?   <div className='w-full h-80 flex justify-center items-center'>
          
            <div className='h-[90%] w-[90%] bg-[#E8E8FE] border-2 border-blue-200 rounded-xl
                    flex justify-center items-center
               '>
                        <div className='w-[50%] h-[100%] flex justify-center items-start gap-3 flex-col'>
                            <h1 className='text-[#1A1340] font-semibold text-3xl'>WelCome Back,   UserName!</h1>
                            <p>Continue your learning journey. You've completed 3 <br /> quizzes this week — keep up the streak!</p>
                        </div>
                        <div className='flex justify-center items-center gap-10'>
                              <span>
                                  <p>87%</p>
                                  <p>Avg Score</p>
                              </span>
                              <span>
                                  <p>24</p>
                                  <p>Quizes Done</p>
                              </span>
                              <span>
                                  <p>7</p>
                                  <p>Subjects</p>
                              </span>
                        </div>
               </div> 
           
       </div>   : ''
      }

       <div className='p-5'>
               <h1 className='text-black font-semibold text-xl'>Choose A Subject</h1>
               {}
              
                <div className='w-full min-h-[50vh] flex justify-center items-center flex-wrap gap-10 pt-10 '>
                     {subjectCardInfo.map((item)=>{
                return    <SubjectCard image={item.image_url} subject={item.subject} />
               })}
                </div>
              
       </div>
    </>
  )
}

export default Home