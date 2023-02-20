import { Link } from "react-router-dom";
import {
  RJS_ACCOUNT,
  RJS_ACCOUNTS,
  RJS_ADD,
  RJS_APPLICATION,
  RJS_SMS,
} from "../../../Utils/Constants/FrontEndURIs";
import ClassNames from "./Application.module.css";

const Application = (props) => {
  return (
    <div className={ClassNames.Application}>
      <h1>Application</h1>
      <div className={ClassNames.CreateLink}>
        <Link to={RJS_SMS + RJS_APPLICATION + RJS_ACCOUNT + RJS_ADD}>
          Create Account
        </Link>
      </div>
      <div className={ClassNames.Accounts}>
        <Link to={RJS_SMS + RJS_APPLICATION + RJS_ACCOUNT + RJS_ACCOUNTS}>
          View Accounts
        </Link>
      </div>
    </div>
  );
};

export default Application;
