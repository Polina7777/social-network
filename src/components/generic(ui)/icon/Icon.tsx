
import { Link } from 'react-router-dom'
import { IconProps } from './Icon-interface'
import './Icon.css'


const Icon: React.FC<IconProps> = ({className,src,alt,id,text,key,type,onClickBorderedEvent,path})=> {
    return (
        <Link to={path}>
        <div className= {`${className}__div`}>
           < img className={className} src={src} alt={alt} id={id} key={key} onClick={onClickBorderedEvent} >       
           </img>
         <p className='text' >{text}</p> 
        </div>
        </Link>
       )
}


export default Icon