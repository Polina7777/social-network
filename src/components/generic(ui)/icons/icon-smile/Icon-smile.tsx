import "./Icon-smile.css"
import React from "react";
import iconSmile from '../../../assets/image/icons/smile.svg'
import { IconSmileProps } from "./Icon-smile-interface";

const IconSmile: React.FunctionComponent <IconSmileProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconSmile} alt="smile" className="icon-smile" />
        </div>
    )
}
export default  IconSmile