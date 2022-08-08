import { Dispatch, SetStateAction } from "react";

export type Dispatcher<S> = Dispatch<SetStateAction<S>>

export interface RegistrationProps {
    event?:any,
    value?: string;
    type?: string;
    className?: string;
    color?: string;
    buttonClassName?: string;
    inputClassName?: string;
    placeholder?: string;
    handlerOnClick?: () => void;
    
  }
  export interface DateSelect {
    day:string,
    month:string,
    year:string
  }