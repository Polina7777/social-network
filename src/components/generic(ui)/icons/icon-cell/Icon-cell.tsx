import "./Icon-cell.css"
import React from "react";
import iconCell from '../../../assets/image/icon/icons/cell.svg'
import { IconCellProps } from "./Icon-cell-interface";

const IconCell: React.FunctionComponent <IconCellProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconCell} alt="cell" className="icon-cell" />
        </div>
    )
}
export default IconCell