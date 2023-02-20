import { Link } from "react-router-dom";
import {
  RJS_ACCOUNT,
  RJS_ADD,
  RJS_APPLICATION,
  RJS_DEALERSHIP,
  RJS_DEALERSHIPS,
  RJS_SMS,
} from "../../../../../Utils/Constants/FrontEndURIs";
import ClassNames from "./Account.module.css";

const Account = (props) => {
  return (
    <div className={ClassNames.Account}>
      <h1>Account</h1>
      <div className={ClassNames.Dealerships}>
        <Link
          to={
            RJS_SMS +
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_DEALERSHIP +
            RJS_DEALERSHIPS
          }
        >
          {" "}
          Dealerships
        </Link>
      </div>
      <div className={ClassNames.CreateLink}>
        <Link
          to={
            RJS_SMS + RJS_APPLICATION + RJS_ACCOUNT + RJS_DEALERSHIP + RJS_ADD
          }
        >
          Add Dealership
        </Link>
      </div>
    </div>
  );
};

export default Account;
