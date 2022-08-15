import "./Logo-small.css"
import React from "react";
import logo from '../../../assets/image/FacebookSmall.svg'
import { LogoSmallProps } from "./Logo-small-interface";

const LogoSmall: React.FunctionComponent <LogoSmallProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={logo} alt="logo" className="logoSmall" />
        </div>
    )
}
export default LogoSmall