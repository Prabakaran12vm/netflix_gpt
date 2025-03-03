import React from "react";

const Login = () => {
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
      <form className="w-3/12 absolute rounded-xl p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="Email Address" className="p-2 m-2 bg-white rounded-2xl" />
        <input type="password"  placeholder="Password" className="p-2 m-2 bg-white rounded-2xl" />
        <button className="p-4 m-4 w-[100px] text-white bg-red-600 rounded-2xl">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
