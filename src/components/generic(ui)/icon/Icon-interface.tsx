import React, { ReactNode } from 'react'

export interface IconProps {
  type?: string
  Img?: React.Component
  id?: string
  path: string
  text?: string
  className?: string
  children?: ReactNode
  src?: string
  alt?: string
  onClickBorderedEvent?: () => void
}
