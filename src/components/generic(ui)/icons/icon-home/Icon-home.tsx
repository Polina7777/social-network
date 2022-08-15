import "./Icon-home.css"
import React from "react";
import iconHome from '../../../assets/image/icons/home.svg'
import { IconHomeProps } from "./Icon-home-interface";

const  IconHome: React.FunctionComponent < IconHomeProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconHome} alt="home" className="icon-home" />
        </div>
    )
}
export default IconHome