import ClassNames from "./ViewSampleUserForm.module.css";

const ViewSampleUserForm = (props) => {
  return (
    <div className={ClassNames.Columns}>
      <h2>User Details</h2>
      <div>
        <label>First Name:</label>
        <p>{props.userInfo.firstName}</p>
      </div>
      <div>
        <label>Middle Name:</label>
        <p>{props.userInfo.middleName}</p>
      </div>
      <div>
        <label>Last Name:</label>
        <p>{props.userInfo.lastName}</p>
      </div>
      <div>
        <label>Email:</label>
        <p>{props.userInfo.email}</p>
      </div>
      <div>
        <label>Phone:</label>
        <p>{props.userInfo.phone}</p>
      </div>
      <div>
        <label>Username:</label>
        <p>{props.userInfo.username}</p>
      </div>
      <div>
        <label>Password:</label>
        <p>{props.userInfo.password}</p>
      </div>
      <div>
        <label>Repeat Password:</label>
        <p>{props.userInfo.repeatPassword}</p>
      </div>
      <div>
        <label>Role Level</label>
        <p>{props.userInfo.roleLevel}</p>
      </div>
      <div>
        <label>Privilege Type</label>
        <p>{props.userInfo.privilegeType}</p>
      </div>
    </div>
  );
};

export default ViewSampleUserForm;
