import { Link } from "react-router-dom";
import { RJS_LOGIN } from "../../Utils/Constants/FrontEndURIs";
import ClassNames from "./Welcome.module.css";

const Welcome = (props) => {
  return (
    <div className={ClassNames.Welcome}>
      <div>
        <h1>Welcome to Site Management System</h1>
      </div>
      <div>
          <Link className={ClassNames.Link} to={RJS_LOGIN}>Login</Link>
      </div>
      
    </div>
  );
};

export default Welcome;
