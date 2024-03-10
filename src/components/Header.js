import React ,{ useEffect }from 'react'
import {auth} from "../utils/firebase"
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../store/userSlice'
import { useDispatch } from 'react-redux'

const Header = () => {
  const navigate=useNavigate();
  const user=useSelector(store=>store.user)
  const dispatch=useDispatch();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
         
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,
            email:email,
            displayName:displayName,
            photoURL:photoURL
        }))
        navigate("/browser")
        } else {
          dispatch(removeUser())
          navigate("/")
        }
      });
      
  },[])
  const handleSignOut=()=>{
    
    signOut(auth).then(() => {
    //  navigate("/")
    }).catch((error) => {
      
    });

  }
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20 w-screen flex justify-between">
       <div>
       <img 
        className='w-44'
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        />
       </div>
       {
        user &&
        <div className='flex'>
          <img  className="w-8 h-7 m-6 cursor-pointer"src={user?.photoURL}/>
          <button onClick={handleSignOut} className='text-white'>Sign Out</button>
        </div>
}
    </div>
  
  ) 
}

export default Header