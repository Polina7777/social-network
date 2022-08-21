import "./Icon-group.css"
import React from "react";
import iconGroup from '../../../assets/image/icons/group.svg'
import { IconGroupProps } from "./Icon-group-interface";

const IconGroup: React.FunctionComponent <IconGroupProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconGroup} alt="group" className="icon-group" />
        </div>
    )
}
export default IconGroup