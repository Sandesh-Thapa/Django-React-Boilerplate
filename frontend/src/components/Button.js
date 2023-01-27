import React from 'react'

const Button = ({background, color, text, className}) => {
  return (
    <button
        className={`bg-${background} text-${color} ${className}`}
    >
        {text ? text : 'Click here'}
    </button>
  )
}

export default Button
