import {
  ACCESS_TYPE_ADMIN,
  ACCESS_TYPE_READ,
  ACCESS_TYPE_SHARE,
  ACCESS_TYPE_UPDATE,
  ACCESS_TYPE_USER,
  ACCESS_TYPE_WRITE,
} from "../../../../../../Utils/Constants";
import ClassNames from "./AddEditSampleUserForm.module.css";

const AddEditSampleUserForm = (props) => {
  return (
    <div className={ClassNames.Columns}>
      <h2>Simple User Details</h2>
      <div>
        <label>First Name:</label>
        <input
          name="firstName"
          type="text"
          defaultValue={
            props.userInfo && props.userInfo.firstName ? props.userInfo.firstName : ""
          }
          onChange={props.userInfoChangeHandler}
        />
      </div>
      <div>
        <label>Middle Name:</label>
        <input
          name="middleName"
          type="text"
          defaultValue={
            props.userInfo && props.userInfo.middleName ? props.userInfo.middleName : ""
          }
          onChange={props.userInfoChangeHandler}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          name="lastName"
          type="text"
          defaultValue={
            props.userInfo && props.userInfo.lastName ? props.userInfo.lastName : ""
          }
          onChange={props.userInfoChangeHandler}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          name="email"
          type="text"
          defaultValue={props.userInfo && props.userInfo.email ? props.userInfo.email : ""}
          onChange={props.userInfoChangeHandler}
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          name="phone"
          type="text"
          defaultValue={props.userInfo && props.userInfo.phone ? props.userInfo.phone : ""}
          onChange={props.userInfoChangeHandler}
        />
      </div>
      <div>
        <label>Username:</label>
        <input
          name="username"
          type="text"
          defaultValue={
            props.userInfo && props.userInfo.username ? props.userInfo.username : ""
          }
          onChange={props.userInfoChangeHandler}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          defaultValue={props.userInfo && props.userInfo.password}
          onChange={
            props.userInfoChangeHandler ? props.userInfoChangeHandler : ""
          }
        />
      </div>
      <div>
        <label>Repeat Password:</label>
        <input
          name="repeatPassword"
          type="password"
          defaultValue={
            props.userInfo && props.userInfo.repeatPassword
              ? props.repeatPassword
              : ""
          }
          onChange={props.userInfoChangeHandler}
        />
      </div>
      <div>
        <label>Role Level</label>
        <select
          name="roleLevel"
          value={
            props.userInfo && props.userInfo.roleLevel
              ? props.userInfo.roleLevel
              : "Select"
          }
          onChange={props.userInfoChangeHandler}
          defaultValue="Select"
        >
          <option value="Select">Select</option>
          <option value={ACCESS_TYPE_ADMIN}>{ACCESS_TYPE_ADMIN}</option>
          <option value={ACCESS_TYPE_USER}>{ACCESS_TYPE_USER}</option>
        </select>
      </div>
      <div>
        <label>Privilege Type</label>
        <select
          name="privilegeType"
          value={props.userInfo && props.userInfo.privilegeType}
          onChange={props.userInfoChangeHandler}
          defaultValue="Select"
        >
          <option value="select">Select</option>
          <option value={ACCESS_TYPE_READ}>{ACCESS_TYPE_READ}</option>
          <option value={ACCESS_TYPE_WRITE}>{ACCESS_TYPE_WRITE}</option>
          <option value={ACCESS_TYPE_UPDATE}>{ACCESS_TYPE_UPDATE}</option>
          <option value={ACCESS_TYPE_SHARE}>{ACCESS_TYPE_SHARE}</option>
        </select>
      </div>
    </div>
  );
};

export default AddEditSampleUserForm;
