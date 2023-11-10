import React from 'react'
import logo from "../assets/Logo.svg"
import { NavLink,Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';

function Navbar(props) {

    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

    function LoginHandler() {
        // console.log(isLoggedIn);
        // setIsLoggedIn(!isLoggedIn);
        // toast.success("logged in ")
    }

  return (
    <div className='flex justify-evenly p-3 bg-[black] text-white'>
    <NavLink to="/">
    <img src={logo} width={100} height={32} loading='lazy' alt='myimg'></img>
    </NavLink>

   <nav className=''>

   <ul className='flex gap-3'>
        <li>
            <Link to='/Home'>Home</Link>
        </li>
        <li>
            <Link to='/'>About</Link>
        </li>
        <li>
            <Link to='/'>Contact</Link>
        </li>

    </ul>

   </nav>

 <div className='pl-2'>
   { !isLoggedIn &&
    <Link to='/Login' className='ml-2'>
        <button onClick={LoginHandler} >Login</button>
    </Link>
   }
    {  !isLoggedIn &&
    <Link to='/SignUp' className='ml-2 mr-3'>
        <button onClick={LoginHandler} >SignUp</button>
    </Link>
    }
    {   isLoggedIn &&
    <Link to='/' className='ml-2'>
        <button onClick={()=>{
                 setIsLoggedIn(!isLoggedIn);
                 toast.success("logged Out ");
        }}>Log Out</button>
    </Link>
   }
    {   isLoggedIn &&
    <Link to='/Dashboard' className='ml-2 mr-3'>
        <button>Dashboard</button>
    </Link>
    }
  </div>


    </div>
  )
}

export default Navbar