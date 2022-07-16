import Main from "../../layouts/main/Main";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";

export interface SecondPageProps {
    type?: string;
    buttonClassName?: string;
    
}


const SecondPage: React.FunctionComponent<SecondPageProps> = () => {
 return (
    <div className="secondPage">
    <Header type = 'secondPage'></Header>
    <Main></Main>
    <Footer buttonClassName="footer-button"></Footer>
    </div>
 )
}
export default SecondPage