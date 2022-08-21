import "./Icon-accounts.css"
import React from "react";
import iconAccounts from '../../../assets/image/icon/icons/acconts.svg'
import { IconAccountsProps } from "./Icon-accounts-interface";

const IconAccounts: React.FunctionComponent <IconAccountsProps> = ({className}) => {
    return (
        <div className={className}>
            <img src={iconAccounts} alt="accounts" className="icon-accounts" />
        </div>
    )
}
export default IconAccounts