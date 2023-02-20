import { useEffect, useState } from "react";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import { SB_ACCOUNT, SB_APPLICATION, SB_DEALERSHIP, SB_SERVER_URL, SB_SMS, SB_VIEW } from "../../../../../Utils/Constants/BackendURIs";
import StringUtils from "../../../../../Utils/StringUtils";
import ClassNames from "./NewEditDealershipForm.module.css";

const NewEditDealershipForm = (props) => {
  const [dealersipInfo, setDealersipInfo] = useState({
    id:null,
    name: null,
    number: null,
    email: null,
    phone: null,
  });

  const [validdealersipInfo, setValidDealersipInfo] = useState({
    id:null,
    name: false,
    number: false,
    email: false,
    phone: false,
  });

  const [loadDealership, setLoadDealership] = useState(false);

  const { loading, httpError, sendRequest } = useHttpV1();

  const dealersipInfoHandler = (event) => {
    setDealersipInfo({
      ...dealersipInfo,
      [event.target.name]: event.target.value,
    });
    setValidDealersipInfo({
      ...validdealersipInfo,
      [event.target.name]: StringUtils.isNotEmpty(event.target.value),
    });
  };

  useEffect(() => {
    if (props.id && !loadDealership) {
      setLoadDealership(true);
      sendRequest({ url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ACCOUNT+SB_DEALERSHIP+SB_VIEW +"/"+ props.id }, (data) => {
        setDealersipInfo({
          ...dealersipInfo,
          id: data.id,
          number: data.number,
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      });
    }
    return props.fetchDealersipInfo(dealersipInfo);
  }, [dealersipInfo, loadDealership, props, sendRequest]);

  return (
    <div className={ClassNames.AccountForm}>
      <div className={ClassNames.Column}>
        <h2>Dealership Details</h2>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={dealersipInfo.name}
            onChange={dealersipInfoHandler}
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            name="number"
            type="text"
            value={dealersipInfo.number}
            onChange={dealersipInfoHandler}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="text"
            value={dealersipInfo.email}
            onChange={dealersipInfoHandler}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            name="phone"
            type="text"
            value={dealersipInfo.phone}
            onChange={dealersipInfoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default NewEditDealershipForm;
