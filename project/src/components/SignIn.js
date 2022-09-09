import React from 'react'
import iconMain from "../images/house-svgrepo-com.svg"
import sideimg from "../images/pexels-olya-kobruseva-5417636.jpg"

function SignIn() {
  return (
    <div className="bg-slate-50 h-screen w-full flex">
      <div className="side-image w-3/4 hidden md:flex md:w-1/2 lg:w-1/2">
        <img src={sideimg} className="h-full w-full object-cover" alt=""/>
      </div>
      <div className="login-container drop-shadow-2xl flex-1 bg-red-50 flex-col p-5 flex justify-center items-center ">
        <img src={iconMain} className="h-16 w-16 object-cover rounded-full" alt="Main Logo" />
        <h1 className="text-4xl text-center font-bold text-gray-700">The Chamber of Issues</h1>
          <div className="input-section flex flex-col h-3/4 justify-center items-center">
            <h1 className="text-3xl pb-3 font-bold text-gray-700">Sign-in</h1>
            <input className="text-2xl lg:text-3xl border-solid border-1 border-gray-700 focus: drop-shadow-xl pl-2 py-3 rounded-lg mb-5 focus:outline-none" type="text" placeholder="you@gmail.com"/>
            <input className="text-2xl lg:text-3xl drop-shadow-xl border-solid border-1 border-gray-700 pl-2 py-2 rounded-lg focus:outline-none" type="password" placeholder="Password"/>
            <button className="text-2xl bg-red-300 hover:bg-red-400 text-white font-bold px-4 rounded w-full py-2 my-3 ">login</button>
          </div>
        </div>
        </div>
  )
}

export default SignIn