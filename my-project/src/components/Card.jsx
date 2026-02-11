import React from 'react'

export default function Card({name, price, status, img}) {
  return (
    <div className="flex items-center justify-between bg-gray-200 p-4 rounded-xl shadow-lg w-80 h-50">
        <div className="flex flex-col gap-2">
            <h1 className="text-lg font-semibold text-black">{name}</h1>

            <div className="flex flex-col text-sm">
                <span>Price: ₱{price}</span>
                <span>Stock: {status}</span>
            </div>
        </div>
        <div>
            <img src={img} alt={name} className="w-24 h-24 object-cover rounded-lg"/>
        </div>
    </div>

  )
}
