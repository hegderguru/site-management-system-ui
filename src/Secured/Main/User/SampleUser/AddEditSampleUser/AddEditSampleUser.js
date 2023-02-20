import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import {
  SB_ACCOUNT,
  SB_APPLICATION,
  SB_DEALERSHIP,
  SB_DEALERSHIPS,
  SB_HTTP_HEADER_CONTENT_TYPE_VALUE,
  SB_HTTP_METHOD_POST,
  SB_SERVER_URL,
  SB_SMS,
  SB_VIEW,
  SEARCH_ALL_DEALERSHIPS,
  SERVER_URL,
} from "../../../../../Utils/Constants/BackendURIs";
import { RJS_USERS } from "../../../../../Utils/Constants/FrontEndURIs";
import AddEditSampleUserForm from "./AddEditSampleUserForm/AddEditSampleUserForm";
import AddEditSimpleAddressForm from "./AddEditSimpleAddressForm/AddEditSimpleAddressForm";
import AddEditSimpleDealershipList from "../../DealershipUser/AddEditSimpleDealershipList/AddEditSimpleDealershipList";
import ClassNames from "./AddEditSampleUser.module.css";
import { USER_TYPE_DEALERSHIP, USER_TYPE_SITE_ENGINEER, USER_TYPE_SITE_OWNER } from "../../../../../Utils/Constants";
import AuthContext from "../../../../store/context/AuthContext/AuthContext";

const AddEditSampleUser = (props) => {
  const [userInfo, setUserInfo] = useState({
    id: null,
    firstName: null,
    middleName: null,
    lastName: null,
    email: null,
    phone: null,
    username: null,
    password: null,
    repeatPassword: null,
    roleLevel: null,
    privilegeType: null,
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
  const [dealershipSearchName, setDealershipSearchName] = useState(null);
  const [dealershipsList, setDealershipsList] = useState([]);
  const [addedDealerships, setAddedDealerships] = useState([]);

  const { loading, httpError, sendRequest } = useHttpV1();
  const navigate = useNavigate();
  const location = useLocation();
  const [userLoaded, setUserLoaded] = useState(false);

  const authContxt = useContext(AuthContext);

  useEffect(() => {
    if (!userLoaded && location.state && location.state.id) {
      setUserLoaded(true);
      sendRequest(
        {
          url: props.sbViewUserPath + "/" + location.state.id,
        },
        (data) => {
          setUserInfo({ ...userInfo, ...data });
          setAddressInfo({ ...addressInfo, ...data.address });
          setAddedDealerships([...addedDealerships, ...data.dealerships]);
          setDealershipsList([...addedDealerships, ...data.dealerships]);
        }
      );
    }
  }, [
    addedDealerships,
    addressInfo,
    location.state,
    props.sbViewUserPath,
    sendRequest,
    userInfo,
    userLoaded,
  ]);

  const userInfoChangeHandler = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const addressInfoChangeHandler = (event) => {
    setAddressInfo({ ...addressInfo, [event.target.name]: event.target.value });
  };

  const fetchDealershipsList = (dealershipSearchName) => {
    setDealershipSearchName(dealershipSearchName);
    if (dealershipSearchName) {
      sendRequest(
        {
          url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ACCOUNT+SB_DEALERSHIP+SB_DEALERSHIPS +"/"+ dealershipSearchName,
        },
        (data) => {
          if (!httpError && !loading && data.length > 0) {
            setDealershipsList(
              data.map((data1) => {
                return {
                  id: data1.id,
                  name: data1.name,
                  number: data1.number,
                  numberName: data1.number + ":" + data1.name,
                };
              })
            );
          }
        }
      );
    }
  };

  const addRemoveDealershipInfoHandler = (dealershipNumberName) => {
    let addDealership = dealershipsList.filter(
      (dealership) =>
        dealership.number + ":" + dealership.name ===
        (dealershipNumberName && dealershipNumberName.length > 0
          ? dealershipNumberName
          : dealershipSearchName)
    );

    if (addDealership.length !== 0) {
      if (dealershipNumberName && dealershipNumberName.length > 0) {
        setAddedDealerships(
          addedDealerships.filter(
            (dealership) =>
              dealership.number + ":" + dealership.name !== dealershipNumberName
          )
        );
        addedDealerships.slice(addedDealerships.indexOf(addDealership[0]), 1);
      } else {
        let addDealership2 = addedDealerships.filter(
          (dealership) =>
            dealership.number + ":" + dealership.name === dealershipSearchName
        );
        if (addDealership2.length === 0) {
          addedDealerships.push(addDealership[0]);
        }
        setAddedDealerships([...addedDealerships]);
      }
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    sendRequest(
      {
        url:
          userInfo && userInfo.id
            ? props.sbUpdateUserPath
            : props.sbAddUserPath,
        method: SB_HTTP_METHOD_POST,
        body: {
          ...userInfo,applicationId:authContxt.applicationId,accountId:authContxt.accountId,
          address: { ...addressInfo },
          dealershipIds: addedDealerships.map((dealership) => dealership.id),
        },
        headers: {
          "Content-Type": SB_HTTP_HEADER_CONTENT_TYPE_VALUE,
        },
      },
      (data,hasHttpError,isLoading) => {
        if (!hasHttpError && !isLoading && data) {          
          navigate(props.rjsViewUserPath, {
            state: { username: data.username,id:data.id },
          });
        }
      }
    );
  };
  console.log("props.userType",props.userType);
  return (
    <form className={ClassNames.Form} onSubmit={onSubmitHandler}>
      <div className={ClassNames.AddEditSampleUser}>
        <AddEditSampleUserForm
          userInfo={userInfo}
          userInfoChangeHandler={userInfoChangeHandler}
        />
        <AddEditSimpleAddressForm
          addressInfo={addressInfo}
          addressInfoChangeHandler={addressInfoChangeHandler}
        />
        {(props.userType === USER_TYPE_DEALERSHIP || props.userType === USER_TYPE_SITE_ENGINEER || props.userType === USER_TYPE_SITE_OWNER) ? (
          <AddEditSimpleDealershipList
            fetchDealershipsList={fetchDealershipsList}
            dealershipsList={dealershipsList}
            addedDealerships={addedDealerships}
            addRemoveDealershipInfoHandler={addRemoveDealershipInfoHandler}
          />
        ) : null}
      </div>
      <div>
        <button>Add User</button>
      </div>
    </form>
  );
};

export default AddEditSampleUser;
