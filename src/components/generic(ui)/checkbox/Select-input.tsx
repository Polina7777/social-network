import { useState } from "react";
import './Select-input.css'

export interface InputProps {
   className?: string,
   options: SelectOption[],
   id?: string,
   name?: string
}


export interface SelectOption {
   value: number,
   text: string | number
}


const SelectInput: React.FC<InputProps> = ({ className, options, name, id }) => {
   const [value, setValue] = useState('')

   return (
      <div className={className ?? 'select-input-container'}>
         <select className="select-input" name={name} id={id} value={value} onChange={(event) => setValue(event.target.value)}>
            {options.map((item, index) => <option key={index} value={item.value}>{item.text}</option>)}
         </select>
      </div>
   )
}
export default SelectInput