import { useEffect, useState } from "react";
import useHttpV1 from "../../../../Hooks/useHttpV1";
import { SB_ADDRESS, SB_APPLICATION, SB_SERVER_URL, SB_SMS, SB_VIEW } from "../../../../Utils/Constants/BackendURIs";
import StringUtils from "../../../../Utils/StringUtils";
import ClassNames from "./NewEditAddressForm.module.css";

const NewEditAddressForm = (props) => {
  const [addressInfo, setAddressInfo] = useState({
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

  const [validAddressInfo, setValidAddressInfo] = useState({
    number: false,
    name: false,
    addressLine1: false,
    addressLine2: false,
    addressLine3: false,
    city: false,
    state: false,
    country: false,
    zipCode: false,
  });
  const [loadAddress, setLoadAddress] = useState(false);
  const { loading, httpError, sendRequest } = useHttpV1();

  const addressInfoHandler = (event) => {
    setAddressInfo({ ...addressInfo, [event.target.name]: event.target.value });
    setValidAddressInfo({
      ...validAddressInfo,
      [event.target.name]: StringUtils.isNotEmpty(event.target.value),
    });
  };
  useEffect(() => {
    if (props.id && !loadAddress) {
      setLoadAddress(true);
      sendRequest({ url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ADDRESS+SB_VIEW +"/"+ props.id }, (data) => {
        setAddressInfo({
          ...addressInfo,
          number: data.number,
          name: data.name,
          addressLine1: data.addressLine1,
          addressLine2: data.addressLine2,
          addressLine3: data.addressLine3,
          city: data.city,
          state: data.state,
          country: data.country,
          zipCode: data.zipCode,
        });
      });
    }
    return props.fetchAddressInfo(addressInfo);
  }, [addressInfo, loadAddress, props, sendRequest]);
  return (
    <div className={ClassNames.NewEditAddressForm}>
      <div className={ClassNames.Column}>
        <h2>Address Details</h2>
        <div>
          <label>Number:</label>
          <input
            name="number"
            type="text"
            value={addressInfo.number}
            onChange={addressInfoHandler}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={addressInfo.name}
            onChange={addressInfoHandler}
          />
        </div>
        <div>
          <label>Address Line 1:</label>
          <input
            name="addressLine1"
            type="text"
            value={addressInfo.addressLine1}
            onChange={addressInfoHandler}
          />
        </div>
        <div>
          <label>Address Line 2:</label>
          <input
            name="addressLine2"
            type="text"
            value={addressInfo.addressLine2}
            onChange={addressInfoHandler}
          />
        </div>
        <div>
          <label>Address Line 3:</label>
          <input
            name="addressLine3"
            type="text"
            value={addressInfo.addressLine3}
            onChange={addressInfoHandler}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            name="city"
            type="text"
            value={addressInfo.city}
            onChange={addressInfoHandler}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            name="state"
            type="text"
            value={addressInfo.state}
            onChange={addressInfoHandler}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            name="country"
            type="text"
            value={addressInfo.country}
            onChange={addressInfoHandler}
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            name="zipCode"
            type="text"
            value={addressInfo.zipCode}
            onChange={addressInfoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default NewEditAddressForm;
