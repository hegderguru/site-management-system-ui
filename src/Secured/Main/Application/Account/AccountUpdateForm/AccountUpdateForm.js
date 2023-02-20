import ClassNames from "./AccountUpdateForm.module.css";

const AccountUpdateForm = (props) => {
  return (
    <div className={ClassNames.AccountForm}>
      <div className={ClassNames.Column}>
        <h2>Account Details</h2>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={props.accountInfo.name}
            onChange={props.accountInfoHandler}
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            name="number"
            type="text"
            value={props.accountInfo.number}
            onChange={props.accountInfoHandler}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            name="email"
            type="text"
            value={props.accountInfo.email}
            onChange={props.accountInfoHandler}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            name="phone"
            type="text"
            value={props.accountInfo.phone}
            onChange={props.accountInfoHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default AccountUpdateForm;
