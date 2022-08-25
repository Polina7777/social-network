
import { IconProps } from './Icon-interface'
import './Icon.css'


const Icon: React.FC<IconProps> = ()=> {
    return (
        <div className={className}>
           <input className="input" id={id} type={type} value={value} name={name} placeholder= {placeholder} onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setValueHandler(event.target.value)}>       
           </input>
        </div>
       )
}


export default Icon