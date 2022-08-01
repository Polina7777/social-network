
import React from "react"
import "./Button.css"


export interface ButtonProps {
   className?:string;
   buttonClassName?:string;
   type?:any;
   props?: any;
   children?: React.ReactNode;
   color?:'primary'|'light'| 'blue'| 'green';
   handlerOnClick?: (event:React.MouseEvent<HTMLButtonElement>) => void;
   focusOnInputClick?:()=>void;
   inputChangeData?:(event:React.MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
}



const Button: React.FunctionComponent <ButtonProps> = ({
   focusOnInputClick,
   type,
  className,
  inputChangeData,
  buttonClassName,
   handlerOnClick,
   children,
   color,
   disabled,
}) => {
   return(
    <button className = {`${color}  ${className}-${color}`} 
     onClick= {focusOnInputClick} color = {color} disabled = {disabled}>
      {children}

    </button>
   )
}
    

export default Button


