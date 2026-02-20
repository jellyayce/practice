import React from 'react'
import PageWrapper from "../components/PageWrapper";
import Navbar from '../components/Navbar'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <PageWrapper>
        <div>
            <Navbar></Navbar>
            <div className="bg-[url('/pic2.png')] bg-cover bg-center w-full h-96 flex justify-center items-center">
                <div className='flex flex-col items-center px-60 text-white gap-8'>
                    <h2 className='font-extrabold text-7xl'>About Us</h2>
                    <span className='text-3xl'>Our mission is to provide reliable service, genuine parts, and guaranteed mechanic availability — giving every rider peace of mind on the road.</span>
                    <span className='font-light text-xl'>Proudly serving riders for over 15 years </span>
                </div>
            </div>
            <div className='flex flex-row justify-around p-12'>
                <div className='flex flex-col w-125 gap-2'>
                    <h2 className='font-bold text-4xl'>🔧 Appointment Booking</h2>
                    <span className='text-2xl ml-16'>Choose your preferred date and time</span>
                    <span className='text-2xl ml-16'>Avoid long lines and fully booked schedules</span>
                    
                </div>
                <div className='flex flex-col w-125 gap-2'>
                    <h2 className='font-bold text-4xl'>🛒 Parts Browsing</h2>
                    <span className='text-2xl ml-16'>Check available motorcycle parts</span>
                    <span className='text-2xl ml-16'>Avoid going to shops that don’t have your needed item</span>
                </div>
            </div>
            <div className='flex flex-row justify-around mt-4'>
                <div className='flex flex-row items-center gap-2'>
                    <FaPhoneAlt className='text-red-700'/>
                    <p>Contact: 0999 999 9999</p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <MdEmail className='text-red-700'/>
                    <p>Email: johndoe@gmail.com</p>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <FaLocationDot className='text-red-700'/>
                    <p>Location: Lapu-Lapu City</p>
                </div>
            </div>
        </div>
    </PageWrapper>
  )
}
