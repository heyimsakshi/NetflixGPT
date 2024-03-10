import React from 'react'
import Header from './Header'
import { useState ,useRef} from 'react'
import { checkValidateData } from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

import { updateProfile } from "firebase/auth";
import { addUser } from '../store/userSlice'
import { useDispatch } from 'react-redux';
const Login = () => {
    const[isSignInForm , setSignInForm]=useState(true)
    const[errorMessage , setErrorMessage]=useState(null)
 
    const dispatch=useDispatch();
    const handleClick= ()=>{
        setSignInForm(!isSignInForm)
    }
    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const handleButtonClick=()=>{
        console.log(email);
        console.log(password);
        const message=checkValidateData(email.current.value,password.current.value)
       if(message) return ;

       //Sign In Sign Up logic
       if(!isSignInForm){
        //Sign up logic
        createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
            // Signed up 
            
            const user = userCredential.user;
            console.log(user)
            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/42388373?v=4"
              }).then(() => {
                //bug part resolve using upadte of user here when sign In 
                const {uid,email,displayName,photoURL} = auth.currentUser;
                dispatch(addUser({uid:uid,
                    email:email,
                    displayName:displayName,
                    photoURL:photoURL
                }))
              //  navigate("/browse")
              }).catch((error) => {
               setErrorMessage(error.message);
              });
           
        })
        .catch((error) => {
            
            setErrorMessage(error.code+"-"+error.message)
        });

       }
       else{
        //Sign In logic
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user);
          // navigate("/browse");
          
        })
        .catch((error) => {
          
          setErrorMessage(error.code+"-"+error.message)
        });
      

       }

    }
    return (
   
    <div >
        <Header/>  
        <div className='absolute'>
        <img 
       
        src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
       
        </div>

      <form onSubmit={(e)=>e.preventDefault()} className='absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0  text-white bg-opacity-80'>
        <h1 className='p-2 m-2 font-bold text-3xl'>{isSignInForm? "Sign In":"Sign Up"} </h1>
        {!isSignInForm && <input ref={name} type="text" placeholder="Name " className="p-2 m-2 w-full bg-gray-700"/>}
        <input ref={email} type="text" placeholder="Email Address " className="p-2 m-2 w-full bg-gray-700"/>
        <input ref={password} type="password" placeholder="Paasword " className=" p-2 m-2 w-full bg-gray-700"/>
        <p className='text-red-500'>{errorMessage}</p>
        <button className=' p-2 m-2 bg-red-700 w-full rounded-sm ' onClick={handleButtonClick}> {isSignInForm? "Sign In":"Sign Up"}</button>
        <p className='px-4 cursor-pointer' onClick={handleClick}>
            {isSignInForm?" New to Netflix ? Sign Up Now":"Already Registered ? Sign In Now"}</p>
      </form>
    
    </div>
    
  )
}

export default Login