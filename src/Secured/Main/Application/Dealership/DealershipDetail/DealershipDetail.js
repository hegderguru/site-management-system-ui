import ClassNames from "./DealershipDetail.module.css";

const DealershipDetail = (props) => {
  return (
    <div className={ClassNames.DealershipDetail}>
      <div className={ClassNames.Column}>
        <h2>Dealership Details</h2>
        <div>
          <label>Name:</label>
          <p>{props.dealershipInfo.name}</p>
        </div>
        <div>
          <label>Number:</label>
          <p>{props.dealershipInfo.number}</p>
        </div>
        <div>
          <label>Email:</label>
          <p>{props.dealershipInfo.email}</p>
        </div>
        <div>
          <label>Phone:</label>
          <p>{props.dealershipInfo.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default DealershipDetail;
