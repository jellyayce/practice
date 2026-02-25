import React from 'react'

export default function ProfileMenu() {
  return (
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
  )
}
