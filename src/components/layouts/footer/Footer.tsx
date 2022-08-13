import { useTranslation } from "react-i18next";
import Button from "../../generic(ui)/buttons/Button";
import { FooterProps } from "./Footer-interface";
import "./Footer.css";


const Footer: React.FunctionComponent<FooterProps> = () => {
  const {t} = useTranslation('translation')
  return (
    <div className="footer">
      <div className="footer_languages">
        <h4 className="languages_list">{t('description.footer.languages')}</h4>
        <Button color="light" className="footer__button">
          +
        </Button>
      </div>
      <div className="navigation_links">
        <div className="links_list">{t('description.footer.links')}</div>
      </div>
    </div>
  );
};

export default Footer;
