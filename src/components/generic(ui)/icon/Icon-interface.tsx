import React, {ReactNode } from "react"

export interface IconProps {
    Img?:React.Component
    id?:string
    key?:string
    text?: string
    className?:string
    children?:ReactNode;
   // src?:React.Component;
   src?:string
    alt?:string;
   

}