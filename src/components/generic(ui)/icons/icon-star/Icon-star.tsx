import "./Icon-star.css"
import React from "react";
import iconStar from '../../../assets/image/icons/star.svg'
import { IconStarProps } from "./Icon-star-interface";

const IconStar: React.FunctionComponent <IconStarProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconStar} alt="star" className="icon-star" />
        </div>
    )
}
export default  IconStar