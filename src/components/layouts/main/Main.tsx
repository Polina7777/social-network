import Authorization from "../authorization/Authorization";
import AccountSearch from "../account-search/AccountSearch";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Registration from "../registration/Registration";

import "./Main.css";
import { MainProps } from "./Main-interface";

const Main: React.FunctionComponent<MainProps> = () => {
  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="accountsearch" element={<AccountSearch />} />
        <Route path="registration" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default Main;

