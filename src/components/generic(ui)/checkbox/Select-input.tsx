import React, { ChangeEvent, useContext, useState } from "react";
import { DateSelect, Dispatcher, RegistrationContext } from "../../layouts/registration/Registration";
import './Select-input.css'
import { InputProps,SelectOption } from "./Select-input.interface";



const SelectInput: React.FC<InputProps> = ({ className, options,name, id,selectHandlerChange}) => {
  //const[ contextName,setContextName ]= useContext(RegistrationContext);

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


   return (
      <div className={className ?? 'select-input__container'}>
           {contextName.name}
         <select className="select-input"  name={name} id={id} 
         // onChange={(event) => setValue(event.target.value)}
         onChange={handleChange}>
            {options.map((item, index) => <option key={index}  value={item.text}>{item.text}</option>)}
              
         </select>
       
      </div>
   )
}
export default SelectInput