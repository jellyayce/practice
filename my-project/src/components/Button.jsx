import React, { useState } from 'react'

export default function Button({label, onClick, isSelected}) {
  return (
    <input type="button" value={label} onClick={onClick} className={`btn w-40 h-15 shadow-lg shadow-gray-400/50 ${isSelected ? "bg-green-500" : "none"}`} />
  )
}
