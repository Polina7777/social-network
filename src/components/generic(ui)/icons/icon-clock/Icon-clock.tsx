import "./Icon-clock.css"
import React from "react";
import iconClock from '../../../assets/image/icons/clock.svg'
import { IconClockProps } from "./Icon-clock-interface";

const IconClock: React.FunctionComponent <IconClockProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconClock} alt="clock" className="icon-clock" />
        </div>
    )
}
export default IconClock