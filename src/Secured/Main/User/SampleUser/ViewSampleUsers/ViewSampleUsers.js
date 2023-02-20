import { useEffect, useState } from "react";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import {
  SB_APPLICATION,
  SB_SERVER_URL,
  SB_USER,
  SB_USERS,
  SERVER_URL,
  VIEW_ALL_USERS,
} from "../../../../../Utils/Constants/BackendURIs";

import StringUtils from "../../../../../Utils/StringUtils";
import ViewShortSampleUser from "../ViewSampleUser/ViewShortSampleUser/ViewShortSampleUser";
import ClassNames from "./ViewSampleUsers.module.css";

const ViewSampleUsers = (props) => {
  const [usersinfo, setUsersinfo] = useState([]);
  const { loading, httpError, sendRequest } = useHttpV1();
  useEffect(() => {
    sendRequest(
      {
        url: props.sbViewUsersPath,
      },
      (data) => {
        setUsersinfo([...data]);
      }
    );
  }, [props.sbViewUsersPath, sendRequest]);

  return (
    <div className={ClassNames.Column}>
      {usersinfo.map((userinfo) => (
        <ViewShortSampleUser
          rjsViewUsersPath={props.rjsViewUsersPath}
          rjsViewUserPath={props.rjsViewUserPath}
          rjsAddUserPath={props.rjsAddUserPath}
          rjsUpdateUserPath={props.rjsUpdateUserPath}
          sbViewUsersPath={props.sbViewUsersPath}
          sbViewUserPath={props.sbViewUserPath}
          sbAddUserPath={props.sbAddUserPath}
          sbUpdateUserPath={props.sbUpdateUserPath}
          key={userinfo.id}
          userinfo={userinfo}
        />
      ))}
    </div>
  );
};

export default ViewSampleUsers;
