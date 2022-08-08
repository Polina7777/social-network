
import React from "react"
import { ButtonProps } from "./Button-interface"
import "./Button.css"

const Button: React.FunctionComponent <ButtonProps> = ({
   buttonEventHandler,
  className,
   children,
   color,
   disabled,
}) => {
   return(
    <button className = {`${color}  ${className}-${color}`} 
     onClick= {buttonEventHandler} color = {color} disabled = {disabled}>
      {children}

    </button>
   )
}
    

export default Button


