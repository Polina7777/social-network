export interface InputProps {
    value?:string
    id?:string;
    name?:string
    className?: string,
    type?: string;
    children?:React.ReactNode;
    placeholder?:string;
    inputClassName?:string
    setValueHandler: (value: string) => void;
    
  }