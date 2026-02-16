import React, { useState } from 'react'

export default function Button({label}) {
    const [isSelected, setIsSelected] = useState(false);
    
    function handleSelect(){
        if(isSelected){
            setIsSelected(false);
        }else{
            setIsSelected(true);
        }
    }

  return (
    <input type="button" value={label} onClick={handleSelect} className={`btn w-40 h-15 shadow-lg shadow-gray-400/50 ${isSelected ? "bg-green-500" : "none"}`} />
  )
}
