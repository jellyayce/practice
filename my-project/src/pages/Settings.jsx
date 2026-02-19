import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProfileMenu from '../components/ProfileMenu';
import NotificationsMenu from '../components/NotificationsMenu';
import AccessibilityMenu from '../components/AccessibilityMenu';
import ThemeMenu from '../components/ThemeMenu';
import { IoPersonCircle } from "react-icons/io5";
import { IoNotificationsCircle } from "react-icons/io5";
import { IoAccessibility } from "react-icons/io5";
import { RiPaintBrushFill } from "react-icons/ri";

export default function Settings() {
    const [activeMenu, setActiveMenu] = useState("Profile");
  return (
    <div>
        <Navbar></Navbar>
        <div className='flex flex-row p-8'>
            <div className="flex items-center menu bg-base-200 rounded-box w-1/4 px-4 gap-2">
                <h1 className='text-5xl font-semibold p-16'>SETTINGS</h1>
                <div className='flex flex-col gap-20'>
                    <li className={`flex flex-row items-center w-full ${activeMenu === "Profile" ? "bg-neutral-300 text-white rounded-box" : "none"}`}>
                        <a onClick={() => setActiveMenu("Profile")} className='text-2xl font-semibold text-gray-700 hover:bg-neutral-300 w-88 hover:rounded-box'><IoPersonCircle className='w-10 h-10'/>Profile</a>
                    </li>
                    <li className={`flex flex-row items-center ${activeMenu === "Notifications" ? "bg-neutral-300 text-white rounded-box" : "none"}`}>
                        <a onClick={() => setActiveMenu("Notifications")} className='text-2xl font-semibold text-gray-700 hover:bg-neutral-300 w-88 hover:rounded-box'><IoNotificationsCircle className='w-10 h-10'/>Notifications</a>
                    </li>
                    <li className={`flex flex-row items-center ${activeMenu === "Accessibility" ? "bg-neutral-300 text-white rounded-box" : "none"}`}>
                        <a onClick={() => setActiveMenu("Accessibility")} className='text-2xl font-semibold text-gray-700 hover:bg-neutral-300 w-88 hover:rounded-box'><IoAccessibility className='w-10 h-10'/>Accessibility</a>
                    </li>
                    <li className={`flex flex-row items-center ${activeMenu === "Theme" ? "bg-neutral-300 text-white rounded-box" : "none"}`}>
                        <a onClick={() => setActiveMenu("Theme")} className='text-2xl font-semibold text-gray-700 hover:bg-neutral-300 w-88 hover:rounded-box'><RiPaintBrushFill className='w-10 h-10'/>Theme</a>
                    </li>
                </div>
            </div>
            <div className="w-3/4 p-4">
                {activeMenu === "Profile" && <ProfileMenu />}   
                {activeMenu === "Notifications" && <NotificationsMenu />}
                {activeMenu === "Accessibility" && <AccessibilityMenu />}
                {activeMenu === "Theme" && <ThemeMenu />}
            </div>
        </div>
    </div>
  )
}
