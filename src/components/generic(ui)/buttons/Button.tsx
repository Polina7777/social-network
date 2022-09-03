import React from 'react'
import { ButtonProps } from './Button-interface'
import './Button.css'

const Button: React.FunctionComponent<ButtonProps> = ({
  buttonEventHandler,
  key,
  className,
  children,
  color,
  disabled,
}) => {
  return (
    <button
      className={`${color}  ${className}-${color}`}
      onClick={buttonEventHandler}
      key={key}
      color={color}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
