import "./Icon-picture.css"
import React from "react";
import iconPicture from '../../../assets/image/icons/picture.svg'
import { IconPictureProps } from "./Icon-picture-interface";

const IconPicture: React.FunctionComponent <IconPictureProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconPicture} alt="pictures" className="icon-picture" />
        </div>
    )
}
export default IconPicture