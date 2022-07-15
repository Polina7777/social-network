import Main from "../../layouts/main/Main";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";

export interface FirstPageProps {
    type?: string;
    buttonClassName?: string;
    
}


const FirstPage: React.FunctionComponent<FirstPageProps> = () => {
 return (
    <div className="firstPage">
    <Header type = 'firstPage'></Header>
    <Main></Main>
    <Footer buttonClassName="footer-button"></Footer>
    </div>
 )
}
export default FirstPage