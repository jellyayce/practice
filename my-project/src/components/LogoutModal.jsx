import React from 'react'

export default function LogoutModal() {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col items-center gap-12 bg-gray-100 rounded-lg p-16'>
            <img src="gearuplogo.png" alt="" className='w-60 h-40'/>
            <div className='flex flex-col items-center'>
                <p className='text-2xl font-extrabold'>Are you sure you want to log out?</p>
                <p className='text-l font-medium'>You will be signed out of your account.</p>
            </div>
            <div className='flex justify-center gap-4'>
                <button className='bg-gray-700 text-white w-25 h-10 rounded-2xl'>Cancel</button>
                <button className='bg-red-700 text-white w-25 h-10 rounded-2xl'>Confirm</button>
            </div>
        </div>
    </div>
  )
}
