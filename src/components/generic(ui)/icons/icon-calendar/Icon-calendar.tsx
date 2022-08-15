import "./Icon-calendar.css"
import React from "react";
import iconCalendar from '../../../assets/image/icons/calendar.svg'
import { IconCalendarProps } from "./Icon-calendar-interface";

const IconCalendar: React.FunctionComponent <IconCalendarProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconCalendar} alt="calendar" className="icon-calendar" />
        </div>
    )
}
export default IconCalendar