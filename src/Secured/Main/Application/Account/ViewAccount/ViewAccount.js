import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import { ACCOUNT_FIND_ACCOUNT, BASE_URL } from "../../../../../Utils/Constants";
import {
  SB_ACCOUNT,
  SB_APPLICATION,
  SB_SERVER_URL,
  SB_SMS,
  SB_VIEW,
} from "../../../../../Utils/Constants/BackendURIs";
import {
  RJS_ACCOUNT,
  RJS_APPLICATION,
  RJS_SMS,
  RJS_UPDATE,
  RJS_WELCOME,
} from "../../../../../Utils/Constants/FrontEndURIs";
import AddressDetail from "../../../Address/AddressDetail/AddressDetail";
import AccountDetail from "../AccountDetail/AccountDetail";
import ClassNames from "./ViewAccount.module.css";

const ViewAccount = (props) => {
  const [accountInfo, setAccountInfo] = useState({
    id: null,
    name: null,
    number: null,
    email: null,
    phone: null,
  });
  const [addressInfo, setAddressInfo] = useState({
    id: null,
    number: null,
    name: null,
    addressLine1: null,
    addressLine2: null,
    addressLine3: null,
    city: null,
    state: null,
    country: null,
    zipCode: null,
  });
  const { loading, httpError, sendRequest } = useHttpV1();
  const location = useLocation();

  useEffect(() => {
    if (location.state.id && !accountInfo.name) {
      sendRequest(
        {
          url:
            SB_SERVER_URL +
            SB_SMS +
            SB_APPLICATION +
            SB_ACCOUNT +
            SB_VIEW +
            "/" +
            location.state.id,
          headers: {
            "Content-Type": "application/json",
          },
        },
        (data) => {
          setAccountInfo({
            ...accountInfo,
            id: data.id,
            name: data.name,
            number: data.number,
            email: data.email,
            phone: data.phone,
          });
          setAddressInfo({
            ...addressInfo,
            id: data.address.id,
            number: data.address.number,
            name: data.address.name,
            addressLine1: data.address.addressLine1,
            addressLine2: data.address.addressLine2,
            addressLine3: data.address.addressLine3,
            city: data.address.city,
            state: data.address.state,
            country: data.address.country,
            zipCode: data.address.zipCode,
          });
        }
      );
    }
  }, [accountInfo, addressInfo, location.state.id, sendRequest]);
  return (
    <div>
      <div className={ClassNames.ViewAccount}>
        {loading ? <p>Loading...</p> : null}
        {httpError ? <p>Could not fetch details...</p> : null}
        <div>
          <AccountDetail
            className={ClassNames.Column}
            accountInfo={accountInfo}
          />
        </div>
        <div>
          <AddressDetail
            className={ClassNames.Column}
            addressInfo={addressInfo}
          />
        </div>
      </div>
      <div className={ClassNames.Button}>
        <Link
          to={
            RJS_SMS +
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_UPDATE +
            RJS_WELCOME +
            location.state.id
          }
        >
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewAccount;
