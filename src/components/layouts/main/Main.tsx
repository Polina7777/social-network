import Logo from "../../generic(ui)/logo/Logo";
import Authorization from "../authorization/Authorization";
import "./Main.css"

export interface MainProps {
    type?: string;
    className?: string;
    text?: string;
    children?: React.ReactNode;
}
const Main: React.FunctionComponent<MainProps> = () => {
   return(
    <div className="main">
     <div className="logo-title">
        <Logo></Logo>
     <span> 
        Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.
     </span>
     </div>
    <div className="login-text">
    <Authorization></Authorization>
    <span className="span-first-page"> <b>Создать страницу</b> знаменитости, музыкальной группы или компании.</span>
    </div>
    </div>
   )
} 

export default Main