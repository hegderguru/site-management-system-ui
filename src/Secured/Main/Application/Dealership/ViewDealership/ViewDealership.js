import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import { SB_ACCOUNT, SB_APPLICATION, SB_DEALERSHIP, SB_SERVER_URL, SB_SMS, SB_VIEW } from "../../../../../Utils/Constants/BackendURIs";
import { RJS_ACCOUNT, RJS_ADD, RJS_APPLICATION, RJS_DEALERSHIP, RJS_SMS, RJS_UPDATE, RJS_VIEW } from "../../../../../Utils/Constants/FrontEndURIs";
import AddressDetail from "../../../Address/AddressDetail/AddressDetail";
import DealershipDetail from "../DealershipDetail/DealershipDetail";
import ClassNames from "./ViewDealership.module.css";

const ViewDealership = (props) => {
  const [dealershipInfo, setDealershipInfo] = useState({
    id: null,
    name: null,
    number: null,
    email: null,
    phone: null,
  });
  const [addressInfo, setAddressInfo] = useState({
    id:null,
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
    if (location.state.id && !dealershipInfo.id) {
      sendRequest(
        {
          url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ACCOUNT+SB_DEALERSHIP+SB_VIEW +"/"+ location.state.id,
          headers: {
            "Content-Type": "application/json",
          },
        },
        (data) => {
          setDealershipInfo({
            ...dealershipInfo,
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
  }, [addressInfo, dealershipInfo, location.state.id, sendRequest]);
  return (
    <div>
      <div className={ClassNames.ViewAccount}>
        {loading ? <p>Loading...</p> : null}
        {httpError ? <p>Could not fetch details...</p> : null}
        <div>
          <DealershipDetail
            className={ClassNames.Column}
            dealershipInfo={dealershipInfo}
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
        <Link to={RJS_SMS+RJS_APPLICATION+RJS_ACCOUNT+RJS_DEALERSHIP+RJS_ADD} state={{dealershipId:dealershipInfo.id,addressId:addressInfo.id}}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDealership;
