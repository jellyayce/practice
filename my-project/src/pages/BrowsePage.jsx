import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card';

export default function BrowsePage() {

    const items = [
        {
            name: "Brake Pad Set",
            price: 599,
            status: "In Stock",
            image: "/images/mouse.png"
        },
        {
            name: "12V Battery",
            price: 2000,
            status: "Low Stock",
            image: "/images/keyboard.png"
        },
        {
            name: "LED Headlight Bulb",
            price: 320,
            status: "In Stock",
            image: "/images/headset.png"
        },
        {
            name: "Air Filter",
            price: 1000,
            status: "In Stock",
            image: "/images/hub.png"
        },
        {
            name: "Spark Plug",
            price: 150,
            status: "In Stock",
            image: "/images/webcam.png"
        },
        {
            name: "Tubeless Tire(Front)",
            price: 1500,
            status: "Out of Stock",
            image: "/images/stand.png"
        },
        {
            name: "Engine Oil 1L",
            price: 320,
            status: "In Stock",
            image: "/images/ssd.png"
        },
        {
            name: "Side Mirro",
            price: 300,
            status: "Out of Stock",
            image: "/images/speaker.png"
        }
    ];


  return (
    <div>
        <Navbar></Navbar>
        <div className='flex flex-row gap-2 p-2 justify-center'>
            <div className='flex flex-col gap-2'>
                <div className="relative w-125 h-60">
                    <div className="absolute inset-0 bg-[url('/browsepagepic1.png')] bg-cover bg-center blur-[2px] brightness-65"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <h1 className="text-white text-4xl font-bold">TESTED</h1>
                    </div>
                </div>
                <div className="relative w-125 h-60">
                    <div className="absolute inset-0 bg-[url('/browsepagepic2.png')] bg-cover bg-center blur-[2px] brightness-65"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <h1 className="text-white text-4xl font-bold">AUTHENTIC</h1>
                    </div>
                </div>
            </div>

            <div>
                <div className="relative w-125 h-122">
                    <div className="absolute inset-0 bg-[url('/browsepagepic3.png')] bg-cover bg-center blur-[2px] brightness-50"></div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
                        <h1 className="text-white text-6xl font-bold">BROWSE</h1>
                        <h1 className="text-white text-6xl font-bold">MOTORCYCLE</h1>
                        <h1 className="text-white text-6xl font-bold">PARTS</h1>
                        <span className="text-white font-light text-2xl">Check availability before visiting the shop.</span>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <div className="relative w-125 h-60">
                    <div className="absolute inset-0 bg-[url('/browsepagepic4.png')] bg-cover bg-center blur-[2px] brightness-65"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <h1 className="text-white text-4xl font-bold">RELIABLE</h1>
                    </div>
                </div>
                <div className="relative w-125 h-60">
                    <div className="absolute inset-0 bg-[url('/browsepagepic5.png')] bg-cover bg-center blur-[2px] brightness-65"></div>
                    <div className="relative z-10 flex items-center justify-center h-full">
                        <h1 className="text-white text-4xl font-bold">HIGH QUALITY</h1>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row justify-center gap-2 py-10'>
            <input type="text" placeholder='Search' className='flex items-center justify-center border-2 border-gray-400 rounded-md w-80 h-10 text-l pl-2'/>
            <button className='flex items-center justify-center rounded-md bg-red-700 text-white w-25 h-10 text-xl'>Search</button>
        </div>
        <div className='flex items-center justify-center pb-12'>
            <div className='grid grid-flow-col grid-rows-2 gap-12 justify-center items-center'>
                {items.map((item, index) =>
                (
                    <Card key={index} name={item.name} price={item.price} status={item.status} img={item.image}></Card>
                ))}
            </div>
        </div>
    </div>
  )
}
