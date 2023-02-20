import { useEffect, useState } from "react";
import StringUtils from "../../../../../Utils/StringUtils";
import ClassNames from "./AccountForm.module.css";

const AccountForm = (props) => {
  const [accountInfo, setAccountInfo] = useState({
    name: null,
    number: null,
    email: null,
    phone: null
  });

  const [validAccountInfo, setValidAccountInfo] = useState({
    name: false,
    number: false,
    email: false,
    phone: false
  });

  const accountInfoHandler = (event) => {
    setAccountInfo({ ...accountInfo, [event.target.name]: event.target.value });
    setValidAccountInfo({
      ...validAccountInfo,
      [event.target.name]: StringUtils.isNotEmpty(event.target.value),
    });
  };

  useEffect(() => {
    props.fetchAccountInfo(accountInfo);
  },[accountInfo, props]);

  return (
    <div className={ClassNames.AccountForm}>
      <div className={ClassNames.Column}>
        <h2>Account Details</h2>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={accountInfo.name}
            onChange={accountInfoHandler}
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            name="number"
            type="text"
            value={accountInfo.number}
            onChange={accountInfoHandler}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="text"
            value={accountInfo.email}
            onChange={accountInfoHandler}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            name="phone"
            type="text"
            value={accountInfo.phone}
            onChange={accountInfoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountForm;
