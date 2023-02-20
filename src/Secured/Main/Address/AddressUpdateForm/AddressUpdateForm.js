import ClassNames from "./AddressUpdateForm.module.css";

const AddressUpdateForm = (props) => {
  return (
    <div className={ClassNames.AddressUpdateForm}>
      <div className={ClassNames.Column}>
        <h2>Address Details</h2>
        <div>
          <label>Number:</label>
          <input
            name="number"
            type="text"
            value={props.addressInfo.number}
            onChange={props.addressInfoHandler}
          />
        </div>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={props.addressInfo.name}
            onChange={props.addressInfoHandler}
          />
        </div>
        <div>
          <label>Address Line 1:</label>
          <input
            name="addressLine1"
            type="text"
            value={props.addressInfo.addressLine1}
            onChange={props.addressInfoHandler}
          />
        </div>
        <div>
          <label>Address Line 2:</label>
          <input
            name="addressLine2"
            type="text"
            value={props.addressInfo.addressLine2}
            onChange={props.addressInfoHandler}
          />
        </div>
        <div>
          <label>Address Line 3:</label>
          <input
            name="addressLine3"
            type="text"
            value={props.addressInfo.addressLine3}
            onChange={props.addressInfoHandler}
          />
        </div>
        <div>
          <label>City:</label>
          <input
            name="city"
            type="text"
            value={props.addressInfo.city}
            onChange={props.addressInfoHandler}
          />
        </div>
        <div>
          <label>State:</label>
          <input
            name="state"
            type="text"
            value={props.addressInfo.state}
            onChange={props.addressInfoHandler}
          />
        </div>
        <div>
          <label>Country:</label>
          <input
            name="country"
            type="text"
            value={props.addressInfo.country}
            onChange={props.addressInfoHandler}
          />
        </div>
        <div>
          <label>Zip Code:</label>
          <input
            name="zipCode"
            type="text"
            value={props.addressInfo.zipCode}
            onChange={props.addressInfoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AddressUpdateForm;
