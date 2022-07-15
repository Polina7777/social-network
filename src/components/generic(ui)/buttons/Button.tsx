
import React from "react"
import "./Button.css"


export interface ButtonProps {
   className?:string;
   props?: any;
   children?: React.ReactNode;
   color?:'primary'|'secondary'| 'blue'| 'green';
   onClick?: (event:React.MouseEvent<HTMLButtonElement>) => void;
   disabled?: boolean;
}



const Button: React.FunctionComponent <ButtonProps> = ({
  className,
   onClick,
   children,
   color,
   disabled,
}) => {
   return(
    <button className = {color === 'green'? `${className} green-authorization`: `${className} blue-authorization`}
     onClick= {onClick} color = {color} disabled = {disabled} >
      {children}

    </button>
   )
}
    

export default Button


