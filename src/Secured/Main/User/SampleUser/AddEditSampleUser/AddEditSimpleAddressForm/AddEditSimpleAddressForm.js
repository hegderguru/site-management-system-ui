import ClassNames from "./AddEditSimpleAddressForm.module.css";

const AddEditAddressForm = (props) => {
  return (
    <div className={ClassNames.Columns}>
      <h2>Simple Address Details</h2>
      <div>
        <label>Number:</label>
        <input
          name="number"
          type="text"
          defaultValue={props.addressInfo && props.addressInfo.number ? props.addressInfo.number : ""}
          onChange={props.addressInfoChangeHandler}
        />
      </div>
      <div>
        <label>Name:</label> 
        <input
          name="name"
          type="text"
          defaultValue={props.addressInfo && props.addressInfo.name ? props.addressInfo.name : ""}
          onChange={props.addressInfoChangeHandler}
        />
      </div>
      <div>
        <label>Address Line 1:</label>
        <input
          name="addressLine1"
          type="text"
          defaultValue={props.addressInfo && props.addressInfo.addressLine1 ? props.addressInfo.addressLine1 : ""}
          onChange={props.addressInfoChangeHandler}
        />
      </div>
      <div>
        <label>Address Line 2:</label>
        <input
          name="addressLine2"
          type="text"
          defaultValue={props.addressInfo && props.addressInfo.addressLine2 ? props.addressInfo.addressLine2 : ""}
          onChange={props.addressInfoChangeHandler}
        />
      </div>
      <div>
        <label>Address Line 3:</label>
        <input
          name="addressLine3"
          type="text"
          defaultValue={props.addressInfo && props.addressInfo.addressLine3 ? props.addressInfo.addressLine3 : ""}
          onChange={props.addressInfoChangeHandler}
        />
      </div>
      <div>
        <label>City:</label>
        <input
          name="city"
          type="text"
          defaultValue={props.addressInfo && props.addressInfo.city ? props.addressInfo.city : ""}
          onChange={props.addressInfoChangeHandler}
        />
      </div>
      <div>
        <label>State:</label>
        <input
          name="state"
          type="text"
          defaultValue={props.addressInfo && props.addressInfo.state ? props.addressInfo.state : ""}
          onChange={props.addressInfoChangeHandler}
        />
      </div>
      <div>
        <label>Country:</label>
        <input
          name="country"
          type="text"
          defaultValue={props.addressInfo && props.addressInfo.country ? props.addressInfo.country : ""}
          onChange={props.addressInfoChangeHandler}
        />
      </div>
      <div>
        <label>Zip Code:</label>
        <input
          name="zipCode"
          type="text"
          defaultValue={props.addressInfo && props.addressInfo.zipCode ? props.addressInfo.zipCode : ""}
          onChange={props.addressInfoChangeHandler}
        />
      </div>
    </div>
  );
};

export default AddEditAddressForm;
