import "./Icon-computer.css"
import React from "react";
import iconComputer from '../../../assets/image/icons/computer.svg'
import { IconComputerProps } from "./Icon-computer-interface";

const IconComputer: React.FunctionComponent <IconComputerProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconComputer} alt="computer" className="icon-computer" />
        </div>
    )
}
export default IconComputer
