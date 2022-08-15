import "./Icon-plus.css"
import React from "react";
import iconPlus from '../../../assets/image/icons/plus.svg'
import { IconPlusProps } from "./Icon-plus-interface";

const  IconPlus: React.FunctionComponent <IconPlusProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconPlus} alt="plus" className="icon-plus" />
        </div>
    )
}
export default IconPlus