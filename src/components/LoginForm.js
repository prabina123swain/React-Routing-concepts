import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom";
import {MdOutlineVisibilityOff,MdOutlineVisibility} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function LoginForm({setIsLoggedIn}) {

  const navigate=useNavigate();
    const [visibleicon,setVisibleicon]=useState(false);
    const [FormData,setFormData]=useState({
        userid:'',
        password:''
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

   function visibleHandler(){
      setVisibleicon(!visibleicon);
   }

   function submitHandler(event) {

      event.preventDefault();
      setIsLoggedIn(true);
      toast.success("Logged in");
      navigate("/dashboard");
   }

  return (
    <div >

    <form onSubmit={submitHandler}>
    <label>
    <p>Enter Use Id <sup>*</sup></p>
    <input 
     required
     type='text'
     placeholder='User Id'
     name="userid"
     value={FormData.userid}
     onChange={changeHandler}
     className='text-[black]'>
    </input>
    </label>


    <label>
    <p>Password  <sup>*</sup></p> 
    <input 
      required
     type={visibleicon?'text':"password"}
     placeholder='Password'
     name="password"
     value={FormData.password}
     onChange={changeHandler}
     className='text-[black]'>
    </input>
   {visibleicon?
    (<MdOutlineVisibilityOff onClick={visibleHandler}/>) :
    (<MdOutlineVisibility onClick={visibleHandler}/>)
    }
    </label>

    <Link to="#">forget password</Link> <br></br>

    <button>Log in</button>

    </form>
    </div>
  )
}

export default LoginForm