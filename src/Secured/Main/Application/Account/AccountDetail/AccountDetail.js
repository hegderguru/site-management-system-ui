import ClassNames from "./AccountDetail.module.css";

const AccountDetail = (props) => {
  return (
    <div className={ClassNames.AccountDetail}>
      <div className={ClassNames.Column}>
        <h2>Account Details</h2>
        <div>
          <label>Name:</label>
          <p>{props.accountInfo.name}</p>
        </div>
        <div>
          <label>Number:</label>
          <p>{props.accountInfo.number}</p>
        </div>
        <div>
          <label>Email:</label>
          <p>{props.accountInfo.email}</p>
        </div>
        <div>
          <label>Phone:</label>
          <p>{props.accountInfo.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDetail;
