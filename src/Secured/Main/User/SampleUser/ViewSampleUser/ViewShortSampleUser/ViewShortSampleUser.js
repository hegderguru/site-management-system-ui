import { useNavigate } from "react-router-dom";
import ClassNames from "./ViewShortSampleUser.module.css";

const ViewShortSampleUser = (props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(props.rjsViewUserPath, {
      state: { username: props.userinfo.username,id:props.userinfo.id},
    });
  };

  return (
    <div className={ClassNames.Row} onClick={onClickHandler}>
      <div>
        <p>
          <span>{props.userinfo.username}</span>`({props.userinfo.firstName}{" "}
          {props.userinfo.middleName} {props.userinfo.lastName})`
        </p>
      </div>
      <div>{props.userinfo.address?
        <p>
          <span>{props.userinfo.address.number}</span>`(
          {props.userinfo.address.city} {props.userinfo.address.state}{" "}
          {props.userinfo.address.country})`
        </p>:null}
      </div>
    </div>
  );
};

export default ViewShortSampleUser;
