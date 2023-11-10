import React from 'react'
import { useState,navigate } from 'react'
import toast from 'react-hot-toast'
import {MdOutlineVisibilityOff,MdOutlineVisibility} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


function SignUpForm({setIsLoggedIn}) {

  const navigate=useNavigate();
  const [visibleicon1,setVisibleicon1]=useState(false);
  const [visibleicon2,setVisibleicon2]=useState(false);
  const [FormData,setFormData]=useState({
    firstname:"",
    lastName:"",
    email:"",
    password1:"",
    password2:""

  })

  function changeHandler(event) {
   // console.log(event.target.value);
    setFormData((prevData)=>{
      return{
        ...prevData,
        [event.target.name]:event.target.value
    }
    })
  }

 function visibleHandler(password){
  console.log(password);
    password==="password1"?
    setVisibleicon1(!visibleicon1):
    setVisibleicon2(!visibleicon2);
    ;
 }


 function submitHandler(event) {

  event.preventDefault();

  if(FormData.password1!=FormData.password2){
    toast.error("password not matched");
    return;
  }
   
  setIsLoggedIn(true);
  toast.success("Signed Up");
  navigate("/dashboard");
}




  return (
    <div>
    
    <div>
    <button>Student</button>
    <button>Instructor</button>
    </div>

    <form onSubmit={submitHandler}>
    <label>
    <p>First Name<sup>*</sup></p>
    <input 
    // required
     type='text'
     placeholder='Enter First name'
     name="firstname"
     value={FormData.firstname}
     onChange={changeHandler}
     className='text-[black]'>
    </input>
    </label>

    <label>
    <p>Last Name<sup>*</sup></p>
    <input 
    // required
     type='text'
     placeholder='Enter Last Name'
     name="lastName"
     value={FormData.lastName}
     onChange={changeHandler}
     className='text-[black]'>
    </input>
    </label>

    <label>
    <p> Email<sup>*</sup></p>
    <input 
    // required
     type='email'
     placeholder='Enter Email'
     name="email"
     value={FormData.email}
     onChange={changeHandler}
     className='text-[black]'>
    </input>
    </label>

    <label>
    <p> Create Password  <sup>*</sup></p> 
    <input 
      required
     type={visibleicon1?'text':"password"}
     placeholder='Enter Password'
     name="password1"
     value={FormData.password1}
     onChange={changeHandler}
     className='text-[black]'>
    </input>
   {visibleicon1?
    (<MdOutlineVisibilityOff onClick={()=>visibleHandler("password1")}/>) :
    (<MdOutlineVisibility onClick={()=>visibleHandler("password1")}/>)
    }
    </label>

    <label>
    <p> Confirm Password  <sup>*</sup></p> 
    <input 
      required
     type={visibleicon2?'text':"password"}
     placeholder='Confirm Password'
     name="password2"
     value={FormData.password2}
     onChange={changeHandler}
     className='text-[black]'>
    </input>
   {visibleicon2?
    (<MdOutlineVisibilityOff onClick={()=>visibleHandler("password2")}/>) :
    (<MdOutlineVisibility onClick={()=>visibleHandler("password2")}/>)
    }
    </label>

    <button>Create account</button>

    </form>


    </div>
  )
}

export default SignUpForm