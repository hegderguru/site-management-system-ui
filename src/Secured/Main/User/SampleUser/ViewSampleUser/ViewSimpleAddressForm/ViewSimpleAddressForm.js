import ClassNames from "./ViewSimpleAddressForm.module.css";

const ViewSimpleAddressForm = (props) => {
  return (
    <div className={ClassNames.Columns}>
      <h2>Address Details</h2>
      <div>
        <label>Number:</label>
        <p>{props.addressInfo.number}</p>
      </div>
      <div>
        <label>Name:</label>
        <p>{props.addressInfo.name}</p>
      </div>
      <div>
        <label>Address Line 1:</label>
        <p>{props.addressInfo.addressLine1}</p>
      </div>
      <div>
        <label>Address Line 2:</label>
        <p>{props.addressInfo.addressLine2}</p>
      </div>
      <div>
        <label>Address Line 3:</label>
        <p>{props.addressInfo.addressLine3}</p>
      </div>
      <div>
        <label>City:</label>
        <p>{props.addressInfo.city}</p>
      </div>
      <div>
        <label>State:</label>
        <p>{props.addressInfo.state}</p>
      </div>
      <div>
        <label>Country:</label>
        <p>{props.addressInfo.country}</p>
      </div>
      <div>
        <label>Zip Code:</label>
        <p>{props.addressInfo.zipCode}</p>
      </div>
    </div>
  );
};

export default ViewSimpleAddressForm;
