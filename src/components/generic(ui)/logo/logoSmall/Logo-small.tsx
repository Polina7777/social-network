import "./Logo-small.css"
import React from "react";
import logoSmall from '../../../../assets/image/FacebookSmall.png'
import { LogoSmallProps } from "./Logo-small-interface";

const LogoSmall: React.FunctionComponent <LogoSmallProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={logoSmall} alt="logo" className="logoSmall" />
        </div>
    )
}
export default LogoSmall