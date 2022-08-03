
 import { useState} from "react";
import "./Input.css"


 export interface InputProps {
   value?:string
   id?:string;
   className?: string,
   type?: string;
   children?:React.ReactNode;
   placeholder?:string;
   inputClassName?:string
   setValueHandler: (value: string) => void;
   
 }


const Input: React.FC<InputProps> = ({type,id,children,placeholder,className,inputClassName,setValueHandler,}) => {

    return (
     <div className={className}>
        <input className="input" id={id} type={type} placeholder= {placeholder} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setValueHandler(event.target.value)}>       
        </input>
     </div>
    )
}
export default Input