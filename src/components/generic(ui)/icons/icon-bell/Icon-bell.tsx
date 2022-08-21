import "./Icon-bell.css"
import React from "react";
import iconBell from '../../../assets/image/icons/bell.svg'
import {IconBellProps} from "./Icon-bell-interface";

const IconBell: React.FunctionComponent <IconBellProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconBell} alt="bell" className="icon-bell" />
        </div>
    )
}
export default  IconBell