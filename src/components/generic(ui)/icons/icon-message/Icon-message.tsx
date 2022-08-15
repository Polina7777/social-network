import "./Icon-message.css"
import React from "react";
import iconMessage from '../../../assets/image/icons/message.svg'
import { IconMessageProps } from "./Icon-message-interface";

const  IconMessage: React.FunctionComponent < IconMessageProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconMessage} alt="message" className="icon-message" />
        </div>
    )
}
export default IconMessage