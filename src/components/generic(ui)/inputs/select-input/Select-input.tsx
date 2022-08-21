import React, {useContext,useState,createContext} from "react";
import './Select-input.css'
import { InputProps} from "./Select-input-interface";
import { registrationContext } from "../../../layouts/registration/Registration";

const SelectInput: React.FC<InputProps> = ({className, options,name, id,selectHandlerChange}) => {

   const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
     
      switch (name) {
         case 'day' : 
         selectHandlerChange((prevState: any) => {
            return {...prevState,day:event.target.value}
         })
         break;
         case 'month' : 
         selectHandlerChange((prevState) => {
            return {...prevState,month:event.target.value}
         })
         break;
         case 'year' : 
         selectHandlerChange((prevState) => {
            return {...prevState,year:event.target.value}
         })
         break;

      }
   }
   const contextName = useContext(registrationContext)
   return (
     
      <div className={className ?? 'select-input__container'}>
       <> {contextName}</>
         <select className="select-input"  name={name} id={id} 
         // onChange={(event) => setValue(event.target.value)}
         onChange={handleChange}>
            {options.map((item, index) => <option key={index}  value={item.text}>{item.text}</option>)}
      
         </select>
       
      </div>
      
   )
}
export default SelectInput


