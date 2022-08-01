
 import { useState, useRef} from "react";
import "./Input.css"


 export interface InputProps {
   value?:string
   id?:string;
  className?: string,
    type?: string;
    children?:React.ReactNode;
    placeholder?:string;
    inputClassName?:string;
    postHandler?: (value: any) => void;
    handlerOnChange?:(value:any) => void;
    inputEvent?:(value:any) => void;
    inputOnChange?:(value:any) => void;
    ref?:any;


 }


const Input: React.FC<InputProps> = ({type,id,ref,children,placeholder,className,inputClassName,postHandler,inputOnChange,handlerOnChange}) => {
   const [value,setValue] = useState('')
   // const inputRef = useRef('')
   // const focus = () => inputRef.current.focus()
   //  const handlerOnChange = () => { 
   //     postHandler?.(value)
   //    console.log(value)} 
    return (
     <div className = {className}>
        <input ref={ref} onChange={inputOnChange} id={id} className={inputClassName} type={type} placeholder= {placeholder} value={value} 
      //   onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)}
       onClick={handlerOnChange}>       
        </input>
     </div>
    )
}
export default Input