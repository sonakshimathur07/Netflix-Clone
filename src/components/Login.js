import React, { useState, useRef } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { HeroImage } from '../utils/constants';
import { UserImage } from '../utils/constants';


const Login = () => {

    const [isSignForm, setIsSignForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
  
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick=()=>{
         const message = checkValidData(
            email.current.value,
            password.current.value,
           )
         setErrorMessage(message);

         if(message) return;
          
         if(!isSignForm){
               // Signed up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                  displayName: name.current.value, 
                  photoURL: {UserImage}
                }).then(() => {
                  // Profile updated!
                  // ...
                  // navigate('/browse')
                }).catch((error) => {
                  // An error occurred
                  // ...
                  setErrorMessage(error.message)
                });
              
         })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +  "-" +errorMessage)
         });

         }else{
            //Sign in logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
    // navigate('/browse')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + '-' + errorMessage)
  });

         }
    }

    const toggleSignInForm=()=>{
       setIsSignForm(!isSignForm);
    }

  return (
    <div>
        <Header />
         <div className='absolute'>
           <img src={HeroImage}
            alt="background-image" />
         </div>
         <form  onSubmit={(e)=>e.preventDefault()}
         className='w-3/12 absolute p-11 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
          
           <h1 className='font-bold text-3xl py-4'>
             {isSignForm ? "Sign In" : " Sign Up"}
           </h1>

            {!isSignForm && <input 
              ref={name}
              type='text' 
              placeholder='Full Name'
              className='p-2 my-2 w-full bg-gray-700'
            />} 

            <input 
             ref={email}
              type='text' 
              placeholder='Email-Address'
              className='p-2 my-2 w-full bg-gray-700'
            />

            <input
              ref={password}
              type='password' 
              placeholder='Password' 
              className='p-2 my-2 w-full bg-gray-700' 
            />

            <p className='text-red-500'>{errorMessage}</p>

            <button 
              className='p-2 my-2 w-full bg-red-700' onClick={handleButtonClick}>
                {isSignForm ? "Sign In" : " Sign Up"}
            </button>

            <p onClick={toggleSignInForm} className='py-4 cursor-pointer'>
            {isSignForm ? "New to Netflix? Sign Up Now" : "Already registered Sign In Now"}
            </p>
         </form>
    </div>
  )
}

export default Login