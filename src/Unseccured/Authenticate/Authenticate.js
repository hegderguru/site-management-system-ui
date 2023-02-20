import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useHttpV1 from "../../Hooks/useHttpV1";
import AuthContext from "../../Secured/store/context/AuthContext/AuthContext";
import { USER_LEVEL_APPLICATION } from "../../Utils/Constants";
import {SB_HTTP_HEADER_CONTENT_TYPE_NAME, SB_HTTP_HEADER_CONTENT_TYPE_VALUE, SB_HTTP_METHOD_POST, SB_LOGIN, SB_SERVER_URL } from "../../Utils/Constants/BackendURIs";

import { RJS_SMS, RJS_WELCOME } from "../../Utils/Constants/FrontEndURIs";

const Authenticate = () => {
  const location = useLocation();
  const username = location.state.username;
  const password = location.state.password;

  const authContext = useContext(AuthContext);

  const { loading, httpError, sendRequest } = useHttpV1();
  const [authFired, setAuthFired] = useState(false);

  useEffect(() => {
    if (!authFired) {
      sendRequest(
        {
          username, 
          password,
          url: SB_SERVER_URL + SB_LOGIN,
          method: SB_HTTP_METHOD_POST,
          headers: {
            SB_HTTP_HEADER_CONTENT_TYPE_NAME: SB_HTTP_HEADER_CONTENT_TYPE_VALUE,
          },
        },
        (data) => {
          setAuthFired(true);
          if (!httpError) {
            authContext.onLogIn(
              true,
              data.username,
              data.id,
              password,              
              data.authorityLevel,
              data.application,
              data.applicationId,
              data.accountId
            );
          } else {
            authContext.onLogIn(false, null);
          }
        }
      );
    }
  }, [authContext, authFired, httpError, password, username, sendRequest]);

  return (
    <div>
      {!httpError && authContext.authenticated && (
        <Navigate to={RJS_SMS} replace={true} />
      )}
      {loading ? <p>Authenticating use ({username})...</p> : null}
      {httpError && <Navigate to={RJS_WELCOME} replace={true} />}
    </div>
  );
};

export default Authenticate;
