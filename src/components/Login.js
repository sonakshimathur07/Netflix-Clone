import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignForm, setIsSignForm]= useState(true);

    const toggleSignInForm=()=>{
       setIsSignForm(!isSignForm);
    }
  return (
    <div>
        <Header />
         <div className='absolute'>
           <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg'
            alt="background-image" />
         </div>
         <form 
         className='w-3/12 absolute p-11 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
          
           <h1 className='font-bold text-3xl py-4'>
             {isSignForm ? "Sign In" : " Sign Up"}
           </h1>

            {!isSignForm && <input 
              type='text' 
              placeholder='Full Name'
              className='p-2 my-2 w-full bg-gray-700'
            />} 

            <input 
              type='text' 
              placeholder='Email-Address'
              className='p-2 my-2 w-full bg-gray-700'
            />

            <input
              type='password' 
              placeholder='Password' 
              className='p-2 my-2 w-full bg-gray-700' 
            />

            <button 
              className='p-2 my-2 w-full bg-red-700'>
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