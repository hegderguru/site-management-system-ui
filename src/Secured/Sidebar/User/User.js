import {
  USER_TYPE_ACCOUNT,
  USER_TYPE_APPLICATION,
  USER_TYPE_DEALERSHIP,
  USER_TYPE_SITE_ENGINEER,
  USER_TYPE_SITE_OWNER,
} from "../../../Utils/Constants";
import {
  RJS_ACCOUNT,
  RJS_ADD,
  RJS_APPLICATION,
  RJS_DEALERSHIP,
  RJS_SITE,
  RJS_SITE_ENGINEER,
  RJS_SITE_ENGINEERS,
  RJS_SITE_OWNER,
  RJS_SITE_OWNERS,
  RJS_SMS,
  RJS_USER,
  RJS_USERS,
} from "../../../Utils/Constants/FrontEndURIs";
import StringUtils from "../../../Utils/StringUtils";
import SimpleUser from "./SimpleUser/SimpleUser";
import ClassNames from "./User.module.css";

const User = (props) => {
  return (
    <div className={ClassNames.User}>
      <h1>Users</h1>
      {props.accessLevel ===
      StringUtils.convertToUpperCase(USER_TYPE_APPLICATION) ? (
        <SimpleUser
          allUsersPath={
            RJS_SMS + RJS_APPLICATION + RJS_USERS + RJS_USER + RJS_USERS
          }
          createUsersPath={
            RJS_SMS + RJS_APPLICATION + RJS_USERS + RJS_USER + RJS_ADD
          }
          userType={USER_TYPE_APPLICATION}
        />
      ) : null}
      {props.accessLevel ===
      StringUtils.convertToUpperCase(USER_TYPE_ACCOUNT) ? (
        <SimpleUser
          allUsersPath={
            RJS_SMS +
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_USERS +
            RJS_USER +
            RJS_USERS
          }
          createUsersPath={
            RJS_SMS +
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_USERS +
            RJS_USER +
            RJS_ADD
          }
          userType={USER_TYPE_ACCOUNT}
        />
      ) : null}
      {props.accessLevel ===
      StringUtils.convertToUpperCase(USER_TYPE_DEALERSHIP) ? (
        <>
          <SimpleUser
            allUsersPath={
              RJS_SMS +
              RJS_APPLICATION +
              RJS_ACCOUNT +
              RJS_DEALERSHIP +
              RJS_USERS +
              RJS_USER +
              RJS_USERS
            }
            createUsersPath={
              RJS_SMS +
              RJS_APPLICATION +
              RJS_ACCOUNT +
              RJS_DEALERSHIP +
              RJS_USERS +
              RJS_USER +
              RJS_ADD
            }
            userType={USER_TYPE_DEALERSHIP}
          />
          <SimpleUser
            allUsersPath={
              RJS_SMS +
              RJS_APPLICATION +
              RJS_ACCOUNT +
              RJS_DEALERSHIP +
              RJS_SITE+
              RJS_USERS+
              RJS_USER+
              RJS_SITE_ENGINEER+
              RJS_USERS
            }
            createUsersPath={
              RJS_SMS +
              RJS_APPLICATION +
              RJS_ACCOUNT +
              RJS_DEALERSHIP +
              RJS_SITE+
              RJS_USERS+
              RJS_USER+
              RJS_SITE_ENGINEER+
              RJS_ADD
            }
            userType={USER_TYPE_SITE_ENGINEER}
          />
          <SimpleUser
            allUsersPath={
              RJS_SMS +
              RJS_APPLICATION +
              RJS_ACCOUNT +
              RJS_DEALERSHIP +
              RJS_SITE+
              RJS_USERS+
              RJS_USER+
              RJS_SITE_OWNER+
              RJS_USERS
            }
            createUsersPath={
              RJS_SMS +
              RJS_APPLICATION +
              RJS_ACCOUNT +
              RJS_DEALERSHIP +
              RJS_SITE+
              RJS_USERS+
              RJS_USER+
              RJS_SITE_OWNER+
              RJS_ADD
            }
            userType={USER_TYPE_SITE_OWNER}
          />
        </>
      ) : null}
    </div>
  );
};

export default User;
