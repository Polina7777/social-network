
import { InputProps } from "./Input-interface";
import "./Input.css"


const Input: React.FC<InputProps> = ({type,value,id,name,children,placeholder,className,inputClassName,setValueHandler,}) => {

    return (
     <div className={className}>
        <input className="input" id={id} type={type} value={value} name={name} placeholder= {placeholder} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setValueHandler(event.target.value)}>       
        </input>
     </div>
    )
}
export default Input