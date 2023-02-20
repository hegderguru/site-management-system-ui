import { useNavigate } from "react-router-dom";
import { RJS_ACCOUNT, RJS_APPLICATION, RJS_DEALERSHIP, RJS_SMS, RJS_VIEW } from "../../../../../../Utils/Constants/FrontEndURIs";
import ClassNames from "./SimpleViewDealership.module.css";

const SimpleViewDealership = (props) => {

    const navigate = useNavigate();

    const simpleViewDealershipHandler = () =>{
        navigate(RJS_SMS+RJS_APPLICATION+RJS_ACCOUNT+RJS_DEALERSHIP+RJS_VIEW, {
            state: { id: props.dealershipInfo.id},
          });
    }

  return (
    <div className={ClassNames.SimpleViewDealership} onClick={simpleViewDealershipHandler}>
      <div className={ClassNames.Column}>
        <div>
          <label>Dealership Name:</label>
          <p>{props.dealershipInfo.name}</p>
        </div>
        <div>
          <label>Dealership Number:</label>
          <p>{props.dealershipInfo.number}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleViewDealership;
