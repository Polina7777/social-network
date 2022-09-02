import React, { ReactComponentElement, ReactNode } from "react"
import { ReactI18NextChild } from "react-i18next"

export interface IconProps {
    type?:string
    Img?:React.Component
    id?:string
    key?:string|number
    path:string
    text?: string|ReactNode|React.Component|ReactI18NextChild|any
    className?:string
    children?:ReactNode;
    src?:string
    alt?:string;
    onClickBorderedEvent?:()=>void
}

