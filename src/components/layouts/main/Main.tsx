import Authorization from "../authorization/Authorization";
import AccountSearch from "../account-search/AccountSearch";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Registration from "../registration/Registration";

import "./Main.css";
import { MainProps } from "./Main-interface";
import GeneralPageCentralPartHome from "../general-page-central-part/General-page-central-part";

const Main: React.FunctionComponent<MainProps> = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="accountsearch" element={<AccountSearch />} />
        <Route path="registration" element={<Registration />} />
        <Route path="generalpage" element={<GeneralPageCentralPartHome/>} />
      </Routes>
    </div>
  );
};

export default Main;

