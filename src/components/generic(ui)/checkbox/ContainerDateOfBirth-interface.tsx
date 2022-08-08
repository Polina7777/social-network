import { DateSelect, Dispatcher } from "../../layouts/registration/Registration-interface-types";

export interface ContainerDateOfBirthProps {
    type?: string;
    className?: string;
    inputClassName?: string;
    placeholder?: string;
    children?: any;
    label?: any;
    value?:string;
    setValueHandler?: (value:any) => void;
    handlerChange?:(value:any)=> void
     dateSelect:Dispatcher<DateSelect>;
  }