import React from "react";
import { useState } from "react";

const Login = () => {
  const toggleSignInForm = ()=>{
    const [isSignInForm,setIsSignInForm] = useState()
    
    const toggleSignInForm = ()=>{
      setIsSignInForm(!isSignInForm)
    }

  }
  return (
    <div>
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg"
          alt="bg-image"
        />
      </div>
      {/* Login form */}
      <form className="w-3/12 absolute rounded-lg p-12  my-36  mx-auto right-0 left-0 text-white bg-black/70  ">
        <h1 className="font-bold ml-2 text-3xl py-4 ">Sign In</h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-2  bg-gray-700 m-2 h-[40px] "
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2  h-[40px] bg-gray-700 "
        />
        <button className=" m-4 ml-2 w-[200px]  text-white bg-red-700 h-[40px] rounded-lg">
          Sign In
        </button>
        <p className="py-4" onClick={toggleSignInForm}>New to Netflix? Sign Up Now</p>
      </form>
    </div>
  );
};

export default Login;
