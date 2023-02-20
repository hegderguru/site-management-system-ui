import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import useHttpV1 from "../../../../Hooks/useHttpV1";
import { SB_ACCOUNT, SB_APPLICATION, SB_DEALERSHIP, SB_SERVER_URL, SB_SMS, SB_VIEW } from "../../../../Utils/Constants/BackendURIs";
import { RJS_ACCOUNT, RJS_ADD, RJS_APPLICATION, RJS_DEALERSHIP, RJS_SMS, RJS_UPDATE, RJS_VIEW } from "../../../../Utils/Constants/FrontEndURIs";
import { SB_SITE } from "../../../../Utils/Constants/BackendURIs";
import { RJS_SITE } from "../../../../Utils/Constants/FrontEndURIs";
import AddressDetail from "../../Address/AddressDetail/AddressDetail";
import SiteDetail from "../SiteDetail/SiteDetail"
import ViewDealershipList from '../../Site/DealershipList/ViewDealershipList/ViewDealershipList'
import ClassNames from "./ViewSite.module.css";

const ViewSite = (props) => {
  const [siteInfo, setSiteInfo] = useState({
    id:null,
    name: null,
    number: null,
    latitude: null,
    longitude: null,
    dealershipId:null,
    siteOwnerId:null,
    siteEngineerId:null,
    dealerships:null,
    dealershipIds:null
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
    if (location.state.id && !siteInfo.id) {
      sendRequest(
        {
          url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ACCOUNT+SB_DEALERSHIP+SB_SITE+SB_VIEW +"/"+ location.state.id,
          headers: {
            "Content-Type": "application/json",
          },
        },
        (data) => {
          setSiteInfo({
            ...siteInfo,
            id:data.id,
            name: data.name,
            number: data.number,
            latitude: data.latitude,
            longitude: data.longitude,
            dealerships:[data.dealership],
            dealershipIds:[data.dealership.id],
            siteEngineer:data.siteEngineer,
            siteOwner:data.siteOwner
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
  }, [addressInfo, siteInfo, location.state.id, sendRequest]);
  return (
    <div>
      <div className={ClassNames.ViewSite}>
        {loading ? <p>Loading...</p> : null}
        {httpError ? <p>Could not fetch details...</p> : null}
        <div>
          <SiteDetail
            className={ClassNames.Column}
            siteInfo={siteInfo}
          />
        </div>
        <div>
          <AddressDetail
            className={ClassNames.Column}
            addressInfo={addressInfo}
          />
        </div>
        <div>
          <ViewDealershipList addedDealerships={siteInfo.dealerships} />
        </div>
      </div>
      <div className={ClassNames.Button}>
        <Link to={RJS_SMS+RJS_APPLICATION+RJS_ACCOUNT+RJS_DEALERSHIP+RJS_SITE+RJS_ADD} state={{siteId:siteInfo.id,addressId:addressInfo.id,dealershipIds:siteInfo.dealershipIds}}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewSite;
