export interface ButtonProps {
    className?:string;
    buttonClassName?:string;
    key?:string
    type?:any;
    props?: any;
    children?: React.ReactNode;
    color?:'primary'|'light'| 'blue'| 'green';
    buttonEventHandler?:() => void;
    disabled?: boolean;
 }