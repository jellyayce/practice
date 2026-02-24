import React from 'react'

export default function Button({ children, variant = "primary", size = "lg", className = "", ...rest }) {
  
  const base = "rounded-md font-medium transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 w-60 h-30",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 w-50 h-20",
    danger: "bg-red-600 text-white hover:bg-red-700 w-40 h-15",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

    return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...rest}>
        {children}
    </button>
  );
}
