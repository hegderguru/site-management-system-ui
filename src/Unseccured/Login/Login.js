import { useEffect, useReducer, useState } from "react";
import { Link } from "react-router-dom";
import ClassNames from "./Login.module.css";

const passwordReducer = (prevState, action) => {
  if (action.type === "PASSWORD") {
    if (action.password && action.password.length > 5) {
      return { password: action.password, isValid: true };
    } else {
      return { password: action.password, isValid: false };
    }
  }
};

const Login = (props) => {
  const [username, setUsername] = useState({ username: "", isValid: false });

  const [userPassword, dispatchUserPassword] = useReducer(passwordReducer, {
    password: "",
    isValid: false,
  });

  const [loginDetailsValid, setLoginDetailsValid] = useState(false);

  const { isValid: usernameIsValid } = username;
  const { isValid: passwordIsValid } = userPassword;

  useEffect(() => {
    setLoginDetailsValid(usernameIsValid && passwordIsValid);
  }, [usernameIsValid, passwordIsValid]);

  const inputOnChangeHandler = (event) => {
    if (event.target.name && event.target.name === "username") {
      if (event.target.value && event.target.value.length > 5) {
        setUsername({
          ...username,
          username: event.target.value,
          isValid: true,
        });
      } else {
        setUsername({
          ...username,
          username: event.target.value.length,
          isValid: false,
        });
      }
    }
    if (event.target.name && event.target.name === "password") {
      dispatchUserPassword({ type: "PASSWORD", password: event.target.value });
    }
  };

  return (
    <div className={ClassNames.Login}>
      {!loginDetailsValid ? (
        <div>
          <p>Enter the valid login details</p>
        </div>
      ) : null}
      <div>
        <label>Username</label>
        <input type="text" name="username" onChange={inputOnChangeHandler} />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={inputOnChangeHandler}
        />
      </div>
      <div>
        <Link
          to="/authenticate"
          state={{
            username: username.username,
            password: userPassword.password,
          }}
        >
          <button disabled={!loginDetailsValid}>Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
