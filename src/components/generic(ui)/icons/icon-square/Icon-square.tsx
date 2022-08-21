import "./Icon-square.css"
import React from "react";
import iconSquare from '../../../assets/image/icons/square.svg'
import { IconSquareProps } from "./Icon-square-interface";

const IconSquare: React.FunctionComponent <IconSquareProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconSquare} alt="square" className="icon-square" />
        </div>
    )
}
export default  IconSquare