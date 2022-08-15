import "./Icon-computer-colored.css"
import React from "react";
import iconComputerColored from '../../../assets/image/icons/computer-colored.svg'
import { IconComputerColoredProps } from "./Icon-computer-colored-interface";



const IconComputerColored: React.FunctionComponent <IconComputerColoredProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconComputerColored} alt="computer-colored" className="icon-computer-colored" />
        </div>
    )
}
export default IconComputerColored