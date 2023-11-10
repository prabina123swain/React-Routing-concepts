import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import frame from '../assets/frame.png'


function Templet({title,desc1,desc2,image,formtype,setIsLoggedIn}) {
  return (
 <div className='text-white'>
   <div>
    <div>
    <h3>{title}</h3>
    <p>{desc1}</p>
    <p>{desc2}</p>
       {
        formtype==="Login" ? 
        <LoginForm setIsLoggedIn={setIsLoggedIn}/>:
        <SignUpForm  setIsLoggedIn={setIsLoggedIn}/>
      }
    </div>

    <div>
        <div></div>
        <p>OR</p>
        <div></div>
    </div>
   
  
     <button>
        <p>Sign Up with Google</p>
     </button>
   </div>

   <div>

   <img src={frame} width={558} height={504} alt='pattern' loading='lazy'></img>
   <img src={image} width={558} height={504} alt='pattern' loading='lazy'></img>

   </div>
  </div>
  )
}

export default Templet