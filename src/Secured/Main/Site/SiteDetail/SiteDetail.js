import ClassNames from "./SiteDetail.module.css";

const SiteDetail = (props) => {
  return (
    <div className={ClassNames.DealershipDetail}>
      <div className={ClassNames.Column}>
        <h2>Site Details</h2>
        <div>
          <label>Name:</label>
          <p>{props.siteInfo.name}</p>
        </div>
        <div>
          <label>Number:</label>
          <p>{props.siteInfo.number}</p>
        </div>
        <div>
          <label>Latitude:</label>
          <p>{props.siteInfo.latitude}</p>
        </div>
        <div>
          <label>Longitude:</label>
          <p>{props.siteInfo.longitude}</p>
        </div>
        <div>
          <label>Engineer:</label>
          <p>{props.siteInfo.siteEngineer?props.siteInfo.siteEngineer.username:""}</p>
        </div>
        <div>
          <label>Owner:</label>
          <p>{props.siteInfo.siteOwner?props.siteInfo.siteOwner.username:""}</p>
        </div>
      </div>
    </div>
  );
};

export default SiteDetail;
