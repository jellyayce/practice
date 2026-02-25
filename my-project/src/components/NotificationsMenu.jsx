import React from 'react'

export default function NotificationsMenu() {
  return (
    <div className='flex flex-col p-6 gap-8 bg-base-200 border border-base-300 rounded-box w-2xl'>
        <h2 className="font-extrabold text-3xl text-black">Notifications</h2>
        <div className='flex flex-col gap-6 text-xl font-medium'>
          <div>
            <span>Appointment Reminders</span>
            
          </div>
          <span>Parts Availability Alerts</span>
          <span>Promotions & Special Deals</span>
          <span>System Announcements</span>
        </div>
    </div>
  )
}
