import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SITE_MANAGEMENT_SYSTEM } from "../../Utils/Constants";
import AuthContext from "../store/context/AuthContext/AuthContext";
import ClassNames from "./Header.module.css";

const Header = (props) => {
  const authContx = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutHandler = () => {
    authContx.onLogout();
    navigate("/");
  };

  return (
    <div className={ClassNames.Header}>
      <div>
        <h1>{authContx.application}</h1>
      </div>
      <div>
        <h1>{""}</h1>
      </div>
      <div>
        <p>{authContx.username}</p>
      </div>
      <div>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
