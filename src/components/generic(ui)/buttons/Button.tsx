
import React from "react"
import "./Button.css"


export interface ButtonProps {
   className?:string;
   buttonClassName?:string;
   props?: any;
   children?: React.ReactNode;
   color?:'primary'|'light'| 'blue'| 'green';
   onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
}



const Button: React.FunctionComponent <ButtonProps> = ({
  className,
  buttonClassName,
   onClick,
   children,
   color,
   disabled,
}) => {
   return(
    <button className = {`${color}  ${className}-${color}`} 
     onClick= {onClick} color = {color} disabled = {disabled} >
      {children}

    </button>
   )
}
    

export default Button


