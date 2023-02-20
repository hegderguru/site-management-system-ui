import { Link } from "react-router-dom";
import {
  RJS_ACCOUNT,
  RJS_ADD,
  RJS_APPLICATION,
  RJS_DEALERSHIP,
  RJS_SITE,
  RJS_SITES,
  RJS_SMS,
} from "../../../../../Utils/Constants/FrontEndURIs";
import ClassNames from "./Dealership.module.css";

const Dealership = (props) => {
  return (
    <div className={ClassNames.Dealership}>
      <h1>Dealership</h1>
      <div className={ClassNames.Dealerships}>
        <Link
          to={
            RJS_SMS +
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_DEALERSHIP +
            RJS_SITE +
            RJS_SITES
          }
        >
          {" "}
          Sites
        </Link>
      </div>
      <div className={ClassNames.CreateLink}>
        <Link
          to={
            RJS_SMS +
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_DEALERSHIP +
            RJS_SITE +
            RJS_ADD
          }
        >
          Add Site
        </Link>
      </div>
    </div>
  );
};

export default Dealership;
