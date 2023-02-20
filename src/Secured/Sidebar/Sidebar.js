import { useContext } from "react";
import ClassNames from "./Sidebar.module.css";
import AuthContext from "../store/context/AuthContext/AuthContext";
import { USER_LEVEL_ACCOUNT, USER_LEVEL_APPLICATION, USER_LEVEL_DEALERSHIP } from "../../Utils/Constants";
import Application from "./Application/Application";
import Account from "./Application/Account/Account";
import User from "./User/User";
import StringUtils from "../../Utils/StringUtils";
import Dealership from "./Application/Account/Dealership/Dealership";

const Sidebar = (props) => {
  const authContext = useContext(AuthContext);

  // const [loading, httpError, sendRequest] = useHttpV1();
  // const [applications,setApplications] = useState({name:null});

  // useEffect(() => {
  //     sendRequest("BASE_URL/Applications")
  // });

  const authContxt = useContext(AuthContext);

  return (
    <div className={ClassNames.Sidebar}>
      {authContxt.accessLevel===StringUtils.convertToUpperCase(USER_LEVEL_APPLICATION)?<Application />:null}
      {authContxt.accessLevel===StringUtils.convertToUpperCase(USER_LEVEL_ACCOUNT)?<Account />:null}
      {authContxt.accessLevel===StringUtils.convertToUpperCase(USER_LEVEL_DEALERSHIP)?<Dealership />:null}
      <User accessLevel={authContext.accessLevel}/>
    </div>
  );
};

export default Sidebar;
