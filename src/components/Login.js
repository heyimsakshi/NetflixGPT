import React from 'react'
import Header from './Header'
import { useState } from 'react'
const Login = () => {
    const[isSignInForm , setSignInForm]=useState(true)
    const handleClick= ()=>{
        setSignInForm(!isSignInForm)
    }
    return (
   
    <div >
        <Header/>  
        <div className='absolute'>
        <img 
       
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
       
        </div>

      <form className='absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80'>
        <h1 className='p-2 m-2 font-bold text-3xl'>{isSignInForm? "Sign In":"Sign Up"} </h1>
        {!isSignInForm && <input type="text" placeholder="Name " className="p-2 m-2 w-full bg-gray-700"/>}
        <input type="text" placeholder="Email Address " className="p-2 m-2 w-full bg-gray-700"/>
        <input type="password" placeholder="Paasword " className=" p-2 m-2 w-full bg-gray-700"/>
        <button className=' p-2 m-2 bg-red-700 w-full rounded-sm '> {isSignInForm? "Sign In":"Sign Up"}</button>
        <p className='px-4 cursor-pointer' onClick={handleClick}>
            {isSignInForm?" New to Netflix ? Sign Up Now":"Already Registered ? Sign In Now"}</p>
      </form>
    
    </div>
    
  )
}

export default Login