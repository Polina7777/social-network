
import "./Input.css"
 export interface InputProps {
  className: string,
    type?: string;
    children?:React.ReactNode;
    placeholder?:string;
    inputClassName?:string

 }


const Input: React.FC<InputProps> = ({type,children,placeholder,className,inputClassName}) => {
    return (
     <div className = {className}>
        <input className= {`${inputClassName}`} type='password' placeholder= {placeholder}>         
        </input>
     </div>
    )
}
export default Input