import ClassNames from "./AddEditSite.module.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  SB_ACCOUNT,
  SB_ADD,
  SB_APPLICATION,
  SB_DEALERSHIP,
  SB_SERVER_URL,
  SB_SMS,
  SB_SITE,
} from "../../../../Utils/Constants/BackendURIs";
import {
  RJS_ACCOUNT,
  RJS_APPLICATION,
  RJS_DEALERSHIP,
  RJS_SITE,
  RJS_SMS,
  RJS_VIEW,
  RJS_WELCOME,
} from "../../../../Utils/Constants/FrontEndURIs";
import NewEditSiteForm from "../NewEditSiteForm/NewEditSiteForm";
import NewEditAddressForm from "../../Address/NewEditAddressForm/NewEditAddressForm";
import useHttpV1 from "../../../../Hooks/useHttpV1";
import AddEditDealershipList from "../DealershipList/AddEditDealershipList/AddEditDealershipList";

const AddEditSite = (props) => {
  const [siteInfo, setSiteInfo] = useState(null);
  const [addressInfo, setAddressInfo] = useState(null);
  const [dealershipIdsInfo, setDealershipIdsInfo] = useState([]);
  const { loading, httpError, sendRequest } = useHttpV1();
  const navigate = useNavigate();
  const location = useLocation();

  const [engineerInfo,setEngineerInfo] = useState(null);
  const [ownerInfo,setOwnerInfo] = useState(null);

  const fetchSiteInfo = (siteInformation) => {
    setSiteInfo(siteInformation);
  };

  const fetchAddressInfo = (addressInformation) => {
    setAddressInfo(addressInformation);
  };

  const fetchDealershipsInfo = (dealerships) => {
    setDealershipIdsInfo(dealerships.map((d) => d.id));
  };

  const fetchEngineerInfo = (engineer) => {
    setEngineerInfo(engineer);
  }

  const fetchOwnerInfo = (owner) => {
    setOwnerInfo(owner);
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    sendRequest(
      {
        url:
          SB_SERVER_URL +
          SB_SMS +
          SB_APPLICATION +
          SB_ACCOUNT +
          SB_DEALERSHIP +
          SB_SITE +
          (location.state && location.state.siteId ? "/update" : SB_ADD),
        method: "POST",
        body: {
          ...siteInfo,
          dealershipIds: dealershipIdsInfo,
          address: { ...addressInfo },
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
      (data) => {
        if (!httpError && !loading && data) {
          navigate(
            RJS_SMS +
              RJS_APPLICATION +
              RJS_ACCOUNT +
              RJS_DEALERSHIP +
              RJS_SITE +
              RJS_VIEW +
              RJS_WELCOME,
            {
              state: { id: data.id, siteId: data.id },
            }
          );
        }
      }
    );
  };

  return (
    <form className={ClassNames.AddEditSite} onSubmit={onSubmitHandler}>
      <div className={ClassNames.Row}>
        <NewEditSiteForm
          id={
            location.state && location.state.siteId ? location.state.siteId : 0
          }
          fetchSiteInfo={fetchSiteInfo}
        />
        <NewEditAddressForm
          id={
            location.state && location.state.addressId
              ? location.state.addressId
              : 0
          }
          fetchAddressInfo={fetchAddressInfo}
        />
        <AddEditDealershipList
          ids={
            location.state && location.state.dealershipIds
              ? location.state.dealershipIds
              : 0
          }
          fetchDealershipsInfo={fetchDealershipsInfo}
        />
      </div>
      <div className={ClassNames.Button}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddEditSite;
