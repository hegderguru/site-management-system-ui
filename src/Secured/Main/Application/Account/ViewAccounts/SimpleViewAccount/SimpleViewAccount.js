import { useNavigate } from "react-router-dom";
import { RJS_ACCOUNT, RJS_APPLICATION, RJS_SMS, RJS_VIEW } from "../../../../../../Utils/Constants/FrontEndURIs";
import ClassNames from "./SimpleViewAccount.module.css";

const SimpleViewAccount = (props) => {

    const navigate = useNavigate();

    const simpleViewAccountHandler = (id) =>{
        navigate(RJS_SMS+RJS_APPLICATION+RJS_ACCOUNT+RJS_VIEW, {
            state: { id: id },
          });
    }

  return (
    <div className={ClassNames.SimpleViewAccount} onClick={()=>{simpleViewAccountHandler(props.accountInfo.id)}}>
      <div className={ClassNames.Column}>
        <div>
          <label>Account Name:</label>
          <p>{props.accountInfo.name}</p>
        </div>
        <div>
          <label>Account Number:</label>
          <p>{props.accountInfo.number}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleViewAccount;
