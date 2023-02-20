import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import {
  SB_APPLICATION,
  SB_SERVER_URL,
  SB_USER,
  SB_USERS,
  SB_VIEW,
  SERVER_URL,
  VIEW_USER,
} from "../../../../../Utils/Constants/BackendURIs";
import ClassNames from "./ViewSampleUser.module.css";
import ViewSampleUserForm from "./ViewSampleUserForm/ViewSampleUserForm";
import ViewSimpleAddressForm from "./ViewSimpleAddressForm/ViewSimpleAddressForm";
import ViewSimpleDealershipList from "../../DealershipUser/ViewSimpleDealershipList/ViewSimpleDealershipList";
import { USER_TYPE_DEALERSHIP, USER_TYPE_SITE_ENGINEER, USER_TYPE_SITE_OWNER } from "../../../../../Utils/Constants";

const ViewSampleUser = (props) => {
  const [userLoaded, setUserLoaded] = useState(false);
  const {loading, httpError, sendRequest } = useHttpV1();
  const location = useLocation();
  const [userInfo, setUserInfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if ((location.state.username || location.state.id) && !userLoaded) {
      setUserLoaded(true);
      sendRequest(
        {
          url:props.sbViewUserPath+ "/"+(location.state&&location.state.id?location.state.id:location.state.username),
        },
        (data,hasHttpError,isLoading) => {
          if (!hasHttpError && !isLoading && data) {
            setUserInfo({ ...data });
          }
        }
      );
    }
  }, [httpError, loading, location.state, props.sbViewUserPath, sendRequest, userLoaded]);

  const onEditHandler = () => {
    navigate(props.rjsUpdateUserPath, {
      state: { username: userInfo.username,id:userInfo.id},
    });
  };

  return (
    <div className={ClassNames.Form}>
      <div>
        <div className={ClassNames.Colmns}>
          {userInfo ? <ViewSampleUserForm userInfo={userInfo} /> : null}
          {userInfo && userInfo.address? (
            <ViewSimpleAddressForm addressInfo={userInfo.address} />
          ) : null}
          {(props.userType===USER_TYPE_DEALERSHIP || props.userType===USER_TYPE_SITE_ENGINEER || props.userType===USER_TYPE_SITE_OWNER) && userInfo ? (
            <ViewSimpleDealershipList addedDealerships={userInfo.dealerships} />
          ) : null}
        </div>
      </div>
      <div className={ClassNames.Button}>
        <button type="button" onClick={onEditHandler}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ViewSampleUser;
