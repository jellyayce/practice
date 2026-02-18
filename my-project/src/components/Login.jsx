import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    function navigateToDashboard(){
        navigate('/Dashboard');
    }
  return (
    <div className='flex flex-row w-screen h-screen p-8 drop-shadow-xl/50'>
        <div className='flex flex-1'>
            <img src="loginpic1.jpg" alt="" className='h-full w-full'/>
        </div>
        <div className='flex flex-1 flex-col justify-center items-center bg-neutral-300 gap-10'>
            <img src="gearuplogo.png" alt="" className='h-40 w-50'/>
            <div className='flex flex-col gap-4'>
                <input type="text" placeholder="Email" className="input border border-black bg-white rounded-md h-12 w-130" />
                <input type="Password" placeholder="Password" className="input border border-black bg-white rounded-md h-12 w-130" />
                <button className='bg-red-700 text-2xl text-white rounded-md h-12 mt-8' onClick={navigateToDashboard}>LOG IN</button>
            </div>
            <div className='flex flex-row gap-2'>
                <p className='text-xl'>Don’t have an account yet?</p>
                <a href="" className='text-xl text-red-700 underline'>Sign Up</a>
            </div>
        </div>
    </div>
  )
}
