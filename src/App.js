import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Secured/Home/Home";
import AuthContext from "./Secured/store/context/AuthContext/AuthContext";
import Authenticate from "./Unseccured/Authenticate/Authenticate";
import Login from "./Unseccured/Login/Login";
import Welcome from "./Unseccured/Welcome/Welcome";
import {
  RJS_AUTHENTICATE,
  RJS_LOGIN,
  RJS_SMS,
  RJS_WELCOME,
} from "./Utils/Constants/FrontEndURIs";

function App() {
  const authContext = useContext(AuthContext);

  return (
    <Routes>
      <Route path={RJS_WELCOME} element={<Welcome />} />
      <Route path={RJS_LOGIN} element={<Login />} />
      <Route path={RJS_AUTHENTICATE} element={<Authenticate />} />
      <Route
        path={RJS_SMS + "/*"}
        element={authContext.authenticated ? <Home /> : <Welcome />}
      />
    </Routes>
  );
}

export default App;
