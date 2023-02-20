import React, { useState } from "react";

const AuthContext = React.createContext({
  authenticated: false,
  username: "",
  password: "",
  application:"",
  applicationId:"",
  accountId:"",
  dealershipId:"",
  userType:"",
  onLogIn: (authenticated, username,id) => {},
  onLogout: () => {},
});

export const AuthContextProvider = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [id, setId] = useState(null);
  const [accessLevel, setAccessLevel] = useState(null);
  const [application,setApplication] = useState(null);
  const [applicationId,setApplicationId] = useState(null);
  const [accountId,setAccountId] = useState(null);

  const onLogIn = (authenticated, username,id,password,accessLevel,application,applicationId,accountId) => {
    setAuthenticated(authenticated);
    setUsername(username);
    setPassword(password)
    setAccessLevel(accessLevel);
    setId(id);
    setApplication(application);
    setApplicationId(applicationId)
    setAccountId(accountId);
  };

  const onLogoutHandler = () => {
    setAuthenticated(false);
    setUsername(null);
    setPassword(null);
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, username,password,accessLevel,id,application,applicationId,accountId, onLogIn, onLogout: onLogoutHandler }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
