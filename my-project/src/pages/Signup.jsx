import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='flex flex-row w-screen h-screen p-8 drop-shadow-xl/50'>
        <div className='flex flex-1'>
            <img src="signuppic1.png" alt="" className='h-full w-full'/>
        </div>
        <div className='flex flex-1 flex-col justify-center items-center bg-neutral-300 gap-10'>
            <img src="gearuplogo.png" alt="" className='h-40 w-50'/>
            <div className='flex flex-col gap-4'>
                <input type="text" placeholder="Name" className="input border border-black bg-white rounded-md h-12 w-130" />
                <input type="text" placeholder="Email" className="input border border-black bg-white rounded-md h-12 w-130" />
                <input type="Password" placeholder="Password" className="input border border-black bg-white rounded-md h-12 w-130" />
                <input type="Password" placeholder="Confirm Password" className="input border border-black bg-white rounded-md h-12 w-130" />
                <button className='bg-red-700 text-2xl text-white rounded-md h-12 mt-8'>Sign Up</button>
            </div>
            <div className='flex flex-row gap-2'>
                <p className='text-xl'>Already have an account?</p>
                <NavLink to="/" className='text-xl text-red-700 underline'>Log In</NavLink>
            </div>
        </div>
    </div>
  )
}
