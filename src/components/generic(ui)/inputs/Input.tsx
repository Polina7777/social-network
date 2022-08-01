
 import { useState, useRef} from "react";
import "./Input.css"


 export interface InputProps {
   value?:string
   id?:string;
<<<<<<< HEAD
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


=======
   className?: string,
   type?: string;
   children?:React.ReactNode;
   placeholder?:string;
   inputClassName?:string
   postHandler?: (value: string) => void;
>>>>>>> 248ee5d6a31ce7b2ace18fb57d226840fe52ab87
 }


const Input: React.FC<InputProps> = ({type,id,ref,children,placeholder,className,inputClassName,postHandler,inputOnChange,handlerOnChange}) => {
   const [value,setValue] = useState('')
   // const inputRef = useRef('')
   // const focus = () => inputRef.current.focus()
   //  const handlerOnChange = () => { 
   //     postHandler?.(value)
   //    console.log(value)} 
    return (
<<<<<<< HEAD
     <div className = {className}>
        <input ref={ref} onChange={inputOnChange} id={id} className={inputClassName} type={type} placeholder= {placeholder} value={value} 
      //   onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)}
       onClick={handlerOnChange}>       
=======
     <div className={className}>
        <input className="input" id={id} type="text" placeholder= {placeholder} value={value} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setValue(event.target.value)}>       
>>>>>>> 248ee5d6a31ce7b2ace18fb57d226840fe52ab87
        </input>
     </div>
    )
}
export default Input