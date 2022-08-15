import "./Icon-camera.css"
import React from "react";
import iconCamera from '../../../assets/image/icons/camera.svg'
import { IconCameraProps } from "./Icon-camera-interface";

const IconCamera: React.FunctionComponent <IconCameraProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconCamera} alt="camera" className="icon-camera" />
        </div>
    )
}
export default IconCamera