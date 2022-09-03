import { Link } from 'react-router-dom'
import './Icon.css'
import { IconProps } from './Icon-interface'
import React from 'react'

const Icon: React.FC<IconProps> = ({
  className,
  src,
  alt,
  id,
  text,
  type,
  onClickBorderedEvent,
  path,
}) => {
  return (
    <Link to={path}>
      <div className={`${className}__div`}>
        <img
          className={className}
          src={src}
          alt={alt}
          id={id}
          onClick={onClickBorderedEvent}
        ></img>
        <p className='text'>{text}</p>
      </div>
    </Link>
  )
}

export default Icon
