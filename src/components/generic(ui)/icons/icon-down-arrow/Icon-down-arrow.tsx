import "./Icon-down-arrow.css"
import React from "react";
import iconDownArrow from '../../../assets/image/icons/down-arrow.svg'
import { IconDownArrowProps } from "./Icon-down-arrow-interface";

const IconDownArrow: React.FunctionComponent <IconDownArrowProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconDownArrow} alt="down-arrow" className="icon-down-arrow" />
        </div>
    )
}
export default IconDownArrow