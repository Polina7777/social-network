import "./Icon-store-colored.css"
import React from "react";
import {IconStoreColoredProps} from "./Icon-store-colored-interface";
import iconStoreColored from '../../../assets/image/icons/store-colored.svg'



const IconStoreColored: React.FunctionComponent <IconStoreColoredProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconStoreColored} alt="store-colored" className="icon-store-colored" />
        </div>
    )
}
export default  IconStoreColored