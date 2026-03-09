import React from "react";
import PageWrapper from "../components/PageWrapper";
import Navbar from "../components/Navbar";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div>
      <Navbar></Navbar>
      <PageWrapper>
        <div className="bg-[url('/pic2.png')] bg-cover bg-center w-full h-96 flex justify-center items-center">
          <div className="flex flex-col items-center px-60 text-white gap-8">
            <h2 className="font-extrabold text-7xl">About Us</h2>
            <span className="text-3xl">
              Our mission is to provide reliable service, genuine parts, and
              guaranteed mechanic availability — giving every rider peace of
              mind on the road.
            </span>
            <span className="font-light text-xl">
              Proudly serving riders for over 15 years{" "}
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-10 p-12 max-w-6xl mx-auto">
          <div className="bg-base-200 p-8 rounded-xl shadow-md flex flex-col gap-4">
            <h2 className="font-bold text-3xl">🔧 Appointment Booking</h2>
            <p className="text-lg">Choose your preferred date and time.</p>
            <p className="text-lg">
              Avoid long lines and fully booked schedules.
            </p>
          </div>
          <div className="bg-base-200 p-8 rounded-xl shadow-md flex flex-col gap-4">
            <h2 className="font-bold text-3xl">🛒 Parts Browsing</h2>
            <p className="text-lg">Check available motorcycle parts.</p>
            <p className="text-lg">
              Avoid going to shops that don’t have your needed item.
            </p>
          </div>
        </div>
        <div className="flex justify-center gap-10 mb-6 text-sm">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-red-700" />
            <span>0999 999 9999</span>
          </div>

          <div className="flex items-center gap-2">
            <MdEmail className="text-red-700" />
            <span>johndoe@gmail.com</span>
          </div>

          <div className="flex items-center gap-2">
            <FaLocationDot className="text-red-700" />
            <span>Lapu-Lapu City</span>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
