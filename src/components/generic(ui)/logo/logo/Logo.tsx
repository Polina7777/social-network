import "./Logo.css"
import React from "react";
import logo from '../../../../assets/image/facebook-logo.svg'
import { LogoProps } from "./Logo-interface";

const Logo: React.FunctionComponent <LogoProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={logo} alt="logo" className="logo" />
        </div>
    )
}
export default Logo