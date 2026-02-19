import React from 'react'
import Navbar from '../components/Navbar'
import { MdEdit } from "react-icons/md";
import { FaCamera } from "react-icons/fa";

export default function Profile() {
  return (
    <div>
        <Navbar></Navbar>
        <div className="w-full bg-white">
            <div className="h-40 bg-neutral-700 relative">
                <button className="absolute right-4 bottom-4 btn btn-circle btn-sm">
                    <MdEdit className='w-7 h-7'/>
                </button>

                <div className="absolute -bottom-26 left-10">
                    <div className="avatar">
                        <div className="flex items-center justify-center w-50 rounded-full bg-gray-300 ring ring-white ring-offset-base-100 ring-offset-2">
                            <img src="/defaultprofileavatar.png" alt="profile" className='flex items-center justify-center h-30 w-30'/>
                        </div>
                    </div>
                    <button className="btn btn-circle btn-l absolute bottom-2 right-2">
                        <FaCamera className='w-7 h-7'/>
                    </button>
                </div>
            </div>
            <div className="flex justify-between h-40">
                <h1 className="flex text-3xl font-bold pl-62 pt-2">John Doe</h1>
            </div>
        </div>
        <div className='flex flex-row justify-center pb-8'>
            <div className='flex flex-col gap-2 flex-1 items-center'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl border px-12 py-4">
                    
                    <legend className="fieldset-legend font-extrabold text-3xl">Personal Information</legend>

                    <label className="label">Name</label>
                    <input type="email" className="input w-xl" placeholder="Name" />

                    <label className="label">Address</label>
                    <input type="email" className="input w-xl" placeholder="Address" />

                    <label className="label">Date of Birth</label>
                    <input type="email" className="input w-xl" placeholder="Date of Birth" />

                    <button className="btn bg-red-700 hover:bg-red-800 text-white mt-4">Save</button>
                </fieldset>
            </div>
            <div className='flex flex-col gap-2 flex-1 items-center'>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-2xl border px-12 py-4">
                    
                    <legend className="fieldset-legend font-extrabold text-3xl">Account Sign-In</legend>

                    <label className="label">Email</label>
                    <input type="email" className="input w-xl" placeholder="Email" />

                    <p className='text-xl font-bold my-2'>Change Password</p>

                    <label className="label">Current Password</label>
                    <input type="email" className="input w-xl" placeholder="Current Password" />

                    <label className="label">New Password</label>
                    <input type="email" className="input w-xl" placeholder="New Password" />

                    <label className="label">Confirm New Password</label>
                    <input type="email" className="input w-xl" placeholder="Confirm New Password" />

                    <button className="btn bg-red-700 hover:bg-red-800 text-white mt-4">Save</button>
                </fieldset>
            </div>
        </div>
    </div>
  )
}
