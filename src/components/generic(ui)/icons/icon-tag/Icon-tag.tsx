import "./Icon-tag.css"
import React from "react";
import iconTag from '../../../assets/image/icons/tag.svg'
import {IconTagProps} from "./Icon-tag-interface";

const IconTag: React.FunctionComponent <IconTagProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconTag} alt="tag" className="icon-tag" />
        </div>
    )
}
export default  IconTag