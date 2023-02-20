import { useNavigate } from "react-router-dom";
import { RJS_ACCOUNT, RJS_APPLICATION, RJS_DEALERSHIP, RJS_SMS, RJS_VIEW,RJS_SITE } from "../../../../../Utils/Constants/FrontEndURIs";
import ClassNames from "./SimpleViewSite.module.css";

const SimpleViewSite = (props) => {

    const navigate = useNavigate();

    const simpleViewSiteHandler = () =>{
        navigate(RJS_SMS+RJS_APPLICATION+RJS_ACCOUNT+RJS_DEALERSHIP+RJS_SITE+RJS_VIEW, {
            state: { id: props.siteInfo.id},
          });
    }

  return (
    <div className={ClassNames.SimpleViewSite} onClick={simpleViewSiteHandler}>
      <div className={ClassNames.Column}>
        <div>
          <label>Site Name:</label>
          <p>{props.siteInfo.name}</p>
        </div>
        <div>
          <label>Site Number:</label>
          <p>{props.siteInfo.number}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleViewSite;
