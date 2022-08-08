export interface ButtonProps {
    className?:string;
    buttonClassName?:string;
    type?:any;
    props?: any;
    children?: React.ReactNode;
    color?:'primary'|'light'| 'blue'| 'green';
    buttonEventHandler?:() => void;
    disabled?: boolean;
 }