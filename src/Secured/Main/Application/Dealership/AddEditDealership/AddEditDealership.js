import ClassNames from "./AddEditDealership.module.css";
import NewEditAddressForm from "../../../Address/NewEditAddressForm/NewEditAddressForm";
import { useContext, useState } from "react";
import NewEditDealershipForm from "../NewEditDealershipForm/NewEditDealershipForm";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import { useLocation, useNavigate } from "react-router-dom";
import { SB_ACCOUNT, SB_ADD, SB_APPLICATION, SB_DEALERSHIP, SB_SERVER_URL, SB_SMS } from "../../../../../Utils/Constants/BackendURIs";
import { RJS_ACCOUNT, RJS_APPLICATION, RJS_DEALERSHIP, RJS_SMS, RJS_VIEW, RJS_WELCOME } from "../../../../../Utils/Constants/FrontEndURIs";
import AuthContext from "../../../../store/context/AuthContext/AuthContext";

const AddEditDealership = (props) => {
  const [dealershipInfo, setDealershipInfo] = useState(null);
  const [addressInfo, setAddressInfo] = useState(null);
  const { loading, httpError, sendRequest } = useHttpV1();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchDealersipInfo = (dealershipInformation) => {
    setDealershipInfo(dealershipInformation);
  };

  const fetchAddressInfo = (addressInformation) => {
    setAddressInfo(addressInformation);
  };

  const onSubmitHandler = (event) => {
    console.log("dealershipInfo.id",dealershipInfo.id);
    event.preventDefault();
    sendRequest(
      {
        url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ACCOUNT+SB_DEALERSHIP+(location.state && location.state.dealershipId?"/update":(SB_ADD +"/"+ (location.state && location.state.accountId?location.state.accountId:1000))),
        method: "POST",
        body: { ...dealershipInfo, address: { ...addressInfo } },
        headers: {
          "Content-Type": "application/json"
        },
      },
      (data) => {
        if (!httpError && !loading && data) {
          navigate(RJS_SMS+RJS_APPLICATION+RJS_ACCOUNT+RJS_DEALERSHIP+RJS_VIEW+RJS_WELCOME, {
            state: { id: data.id,dealershipId:data.id },
          });
        }
      }
    );
  };

  return (
    <form className={ClassNames.AddDealership} onSubmit={onSubmitHandler}>
      <div className={ClassNames.Row}>
        <NewEditDealershipForm
          id={location.state && location.state.dealershipId ? location.state.dealershipId : 0}
          fetchDealersipInfo={fetchDealersipInfo}
        />
        <NewEditAddressForm
          id={location.state && location.state.addressId ? location.state.addressId : 0}
          fetchAddressInfo={fetchAddressInfo}
        />
      </div>
      
      <div className={ClassNames.Button}>
        <button>Submit</button>
      </div>
    </form>
  );
};

export default AddEditDealership;
