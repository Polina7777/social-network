
import React from "react"
import "./Button.css"


export interface ButtonProps {
   className?:string;
   buttonClassName?:string;
   type?:any;
   props?: any;
   children?: React.ReactNode;
   color?:'primary'|'light'| 'blue'| 'green';
   buttonEventHandler?:() => void;
   disabled?: boolean;
}



const Button: React.FunctionComponent <ButtonProps> = ({

   type,
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


