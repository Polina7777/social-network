import React from 'react'
import { Dispatcher, DateSelect } from '../../../layouts/registration/Registration-interface-types'

export interface InputProps {
  children?: React.ReactNode
  className?: string
  options: SelectOption[]
  id?: string
  name?: string
  value?: any
  selectHandlerChange: Dispatcher<DateSelect>
}

export interface SelectOption {
  value: number | string
  text: string | number
}
