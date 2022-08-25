import React, {FunctionComponent, ImgHTMLAttributes, ReactElement, ReactNode, SVGProps } from "react"

export interface IconProps {
    type?:string
    Img?:React.Component
    id?:string
    key?:string|number
    text?: string
    className?:string
    children?:ReactNode;
    src?:string
    alt?:string;
    onClickBorderedEvent?:()=>void
}

