import React from "react";
import { useState } from "react";
import Header from './Header'
import checkValidData from '../utils/vaidate'


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleButtonClick = ()=>{
    checkValidData

  }
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
          alt="bg-image"
        />
      </div>
      {/* Login form */}
      <form className="w-3/12 absolute rounded-lg p-12  my-36  mx-auto right-0 left-0 text-white bg-black/70  ">
        <h1 className="font-bold  text-3xl py-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 m-2 h-[40px] "
        />
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700 m-2 h-[40px] "
        />}
        <input
          type="password"
          placeholder="Password"
          className="p-4 m-2 my-4 w-full  h-[40px] bg-gray-700 "
        />
        <button onClick={handleButtonClick} className=" m-4 ml-2 w-full text-white bg-red-700 h-[40px] rounded-lg">
          {!isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4" onClick={toggleSignInForm}>
          New to Netflix? Sign Up Now
        </p>
      </form>
    </div>
  );
};

export default Login;
