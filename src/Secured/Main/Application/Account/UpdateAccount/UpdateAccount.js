import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import {
  ACCOUNT_FIND_ACCOUNT,
  ACCOUNT_UPDATE_URI,
  BASE_URL,
} from "../../../../../Utils/Constants";
import { SB_ACCOUNT, SB_APPLICATION, SB_SERVER_URL, SB_SMS, SB_UPDATE, SB_VIEW } from "../../../../../Utils/Constants/BackendURIs";
import { RJS_ACCOUNT, RJS_APPLICATION, RJS_SMS, RJS_VIEW } from "../../../../../Utils/Constants/FrontEndURIs";
import StringUtils from "../../../../../Utils/StringUtils";
import AddressUpdateForm from "../../../Address/AddressUpdateForm/AddressUpdateForm";
import AccountUpdateForm from "../AccountUpdateForm/AccountUpdateForm";
import ClassNames from "./UpdateAccount.module.css";

const UpdateAccount = (props) => {
  const [accountInfo, setAccountInfo] = useState(null);
  const [addressInfo, setAddressInfo] = useState(null);
  const [validAccountInfo, setValidAccountInfo] = useState(null);
  const [validAddressInfo, setValidAddressInfo] = useState(null);
  const { loading, httpError, sendRequest } = useHttpV1();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id && !accountInfo) {
      sendRequest(
        {
          url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ACCOUNT+SB_VIEW + "/" + id,
          headers: {
            "Content-Type": "application/json",
          },
        },
        (data) => {
          console.log("data",data);
          setAccountInfo({
            ...accountInfo,
            id: data.id,
            name: data.name,
            number: data.number,
            email: data.email,
            phone: data.phone
          });
          setValidAccountInfo({
            ...validAccountInfo,
            id: true,
            name: true,
            number: true,
            email: true,
            phone: true
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
            zipCode: data.address.zipCode
          });
          setValidAddressInfo({
            ...validAddressInfo,
            id: true,
            number: true,
            name: true,
            addressLine1: true,
            addressLine2: true,
            addressLine3: true,
            city: true,
            state: true,
            country: true,
            zipCode: true
          });
        }
      );
    }
  }, [accountInfo, addressInfo, id, sendRequest, validAccountInfo, validAddressInfo]);

  const accountInfoHandler = (event) => {
    setAccountInfo({ ...accountInfo, [event.target.name]: event.target.value });
    setValidAccountInfo({
      ...validAccountInfo,
      [event.target.name]: StringUtils.isNotEmpty(event.target.value),
    });
  };

  const addressInfoHandler = (event) => {
    setAddressInfo({ ...addressInfo, [event.target.name]: event.target.value });
    setValidAddressInfo({
      ...validAddressInfo,
      [event.target.name]: StringUtils.isNotEmpty(event.target.value),
    });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    sendRequest(
      {
        url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ACCOUNT+SB_UPDATE,
        method: "POST",
        body: { ...accountInfo,address: { ...addressInfo } },
        headers: {
          "Content-Type": "application/json",
        },
      },
      (data) => {
        if (!httpError && !loading && data) {
          navigate( RJS_SMS+RJS_APPLICATION+RJS_ACCOUNT+RJS_VIEW, {
            state: { id: data.id }
          });
        }
      }
    );
  };

  return (
    <>
      {accountInfo ? (
        <form onSubmit={onSubmitHandler}>
          <div className={ClassNames.UpdateAccount}>
            <AccountUpdateForm
              accountInfoHandler={accountInfoHandler}
              accountInfo={accountInfo}
            />

            <AddressUpdateForm
              addressInfoHandler={addressInfoHandler}
              addressInfo={addressInfo}
            />
          </div>
          <div className={ClassNames.Button}>
            <button>Submit</button>
          </div>
        </form>
      ) : (
        <p>No data found</p>
      )}
    </>
  );
};

export default UpdateAccount;
