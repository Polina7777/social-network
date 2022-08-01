
import { useState } from "react";
import "./Input.css"

 export interface InputProps {
   value?:string
   id?:string;
   className?: string,
   type?: string;
   children?:React.ReactNode;
   placeholder?:string;
   inputClassName?:string
   postHandler?: (value: string) => void;
 }


const Input: React.FC<InputProps> = ({type,id,children,placeholder,className,inputClassName,postHandler}) => {
   const [value,setValue] = useState('')
   // const handlerOnChange = () => {
   //     postHandler(value)
   // }
    return (
     <div className={className}>
        <input id={id} type="text" placeholder= {placeholder} value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)}>       
        </input>
     </div>
    )
}
export default Input