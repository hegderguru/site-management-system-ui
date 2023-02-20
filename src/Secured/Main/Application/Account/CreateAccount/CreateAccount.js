import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import {
  SB_ACCOUNT,
  SB_ADD,
  SB_APPLICATION,
  SB_HTTP_HEADER_CONTENT_TYPE_VALUE,
  SB_HTTP_METHOD_GET,
  SB_HTTP_METHOD_POST,
  SB_SERVER_URL,
  SB_SMS,
} from "../../../../../Utils/Constants/BackendURIs";
import {
  RJS_ACCOUNT,
  RJS_APPLICATION,
  RJS_SMS,
  RJS_VIEW,
} from "../../../../../Utils/Constants/FrontEndURIs";
import AuthContext from "../../../../store/context/AuthContext/AuthContext";
import AddressForm from "../../../Address/AddressForm/AddressForm";
import AccountForm from "../AccountForm/AccountForm";
import ClassNames from "./CreateAccount.module.css";

const CreateAccount = (props) => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [addressInfo, setAddressInfo] = useState(null);
  const { loading, httpError, sendRequest } = useHttpV1();
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const fetchAccountInfo = (accountInformation) => {
    setAccountInfo(accountInformation);
  };

  const fetchAddressInfo = (addressInformation) => {
    setAddressInfo(addressInformation);
  };

  const onSubmitHandler = (event) => {
    console.log("isLoadning",context.applicationId);
    event.preventDefault();
    sendRequest(
      {
        url:
          SB_SERVER_URL +
          SB_SMS +
          SB_APPLICATION +
          SB_ACCOUNT +
          SB_ADD +
          "/" +
          context.applicationId,
        method: SB_HTTP_METHOD_POST,
        body: { ...accountInfo,applicationId:context.applicationId, address: { ...addressInfo } },
        headers: {
          "Content-Type": SB_HTTP_HEADER_CONTENT_TYPE_VALUE,
        },
      },
      (data,hasHttpError,isLoadning) => {
        if (!hasHttpError && !isLoadning && data) {
          navigate(RJS_SMS + RJS_APPLICATION + RJS_ACCOUNT + RJS_VIEW, {
            state: { id: data.id },
          });
        }
      }
    );
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className={ClassNames.CreateAccount}>
        <AccountForm fetchAccountInfo={fetchAccountInfo} />
        <AddressForm fetchAddressInfo={fetchAddressInfo} />
      </div>
      <div className={ClassNames.Button}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default CreateAccount;
