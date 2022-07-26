import "./Logo.css"
import React from "react";


export interface LogoProps{
    props?: any;
    children?: React.ReactNode;
    type?:string;
    className?:string;
}

const Logo: React.FunctionComponent <LogoProps> = ({type,
    className,
    children
}) => {
    return (
     <div  className={`logo ${className}`} >
        <span className={`logo ${className}_small`}>facebook</span>
     </div>
    )
}
export default Logo