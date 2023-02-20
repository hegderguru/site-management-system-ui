import { Link } from "react-router-dom";
import ClassNames from "./SimpleUser.module.css";

const SimpleUser = (props) => {
  return (
    <div className={ClassNames.SimpleUser}>
      <div className={ClassNames.CreateLink}>
        <Link to={props.allUsersPath} >All {props.userType}</Link>        
      </div>
      <div className={ClassNames.CreateLink}>
        <Link to={props.createUsersPath} >Create {props.userType}</Link>        
      </div>     
    </div>
  );
};

export default SimpleUser;
