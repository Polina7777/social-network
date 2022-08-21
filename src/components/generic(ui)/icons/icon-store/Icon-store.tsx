import "./Icon-store.css"
import React from "react";
import iconStore from '../../../assets/image/icons/store.svg'

import {IconStoreProps} from "./Icon-store-interface";



const IconStore: React.FunctionComponent <IconStoreProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconStore} alt="store" className="icon-store" />
        </div>
    )
}
export default  IconStore

