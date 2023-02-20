import { useEffect, useState } from "react";
import useHttpV1 from "../../../../Hooks/useHttpV1";
import {
  SB_ACCOUNT,
  SB_APPLICATION,
  SB_DEALERSHIP,
  SB_SERVER_URL,
  SB_SITE,
  SB_SITE_ENGINEER,
  SB_SITE_ENGINEERS,
  SB_SITE_OWNER,
  SB_SITE_OWNERS,
  SB_SMS,
  SB_USER,
  SB_USERS,
  SB_VIEW,
} from "../../../../Utils/Constants/BackendURIs";
import StringUtils from "../../../../Utils/StringUtils";
import ClassNames from "./NewEditSiteForm.module.css";

const NewEditSiteForm = (props) => {
  const [siteInfo, setSiteInfo] = useState({
    id: null,
    name: null,
    number: null,
    latitude: null,
    longitude: null,
    dealershipId: null,
    siteOwnerId: null,
    siteEngineerId: null,
    siteOwner: null,
    siteEngineer: null,
  });

  const [validSiteInfo, setValidSiteInfo] = useState({
    id: false,
    name: false,
    number: false,
    latitude: false,
    longitude: false,
    dealershipId: false,
    siteOwnerId: false,
    siteEngineerId: false,
    siteOwner: false,
    siteEngineer: false,
  });

  const [loadDealership, setLoadDealership] = useState(false);

  const { loading, httpError, sendRequest } = useHttpV1();

  const { coords, setCords } = useState({ latitude: null, longitude: null });

  const [siteOwners, setSiteOwners] = useState([]);
  const [siteEngineers, setSiteEngineers] = useState([]);

  const SiteInfoHandler = (event) => {
    setSiteInfo({
      ...siteInfo,
      [event.target.name]: event.target.value,
    });
    setValidSiteInfo({
      ...validSiteInfo,
      [event.target.name]: StringUtils.isNotEmpty(event.target.value),
    });
  };

  useEffect(() => {
    if (props.id && !loadDealership) {
      setLoadDealership(true);
      sendRequest(
        {
          url:
            SB_SERVER_URL +
            SB_SMS +
            SB_APPLICATION +
            SB_ACCOUNT +
            SB_DEALERSHIP +
            SB_SITE +
            SB_VIEW +
            "/" +
            props.id,
        },
        (data) => {
          setSiteInfo({
            ...siteInfo,
            id: data.id,
            name: data.name,
            number: data.number,
            latitude: data.latitude,
            longitude: data.longitude, //,
            // dealershipId:data.dealership.id,
            // siteOwnerId:data.siteOwner.id,
            // siteEngineerId:data.siteEngineer.id
          });
        }
      );
    }
    return props.fetchSiteInfo(siteInfo);
  }, [siteInfo, loadDealership, props, sendRequest]);

  try {
    const location = window.navigator && window.navigator.geolocation;
    location.getCurrentPosition(
      (position) => {
        setCords({
          ...coords,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      () => console.log("location error"),
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  } catch (err) {}

  const ownerChangeHandler = (event) => {
    if (event.target.value) {
      let sos = siteOwners.filter((so) => {
        return so.username === event.target.value;
      });
      if (sos && sos[0]) {
        setSiteInfo({ ...siteInfo, siteOwnerId: sos[0].id });
      } else {
        sendRequest(
          {
            url:
              SB_SERVER_URL +
              SB_APPLICATION +
              SB_ACCOUNT +
              SB_DEALERSHIP +
              SB_SITE +
              SB_USERS +
              SB_USER +
              SB_SITE_OWNER +
              SB_SITE_OWNERS +
              "/" +
              event.target.value,
          },
          (data) => {
            setSiteOwners([...data]);
          }
        );
      }
    }
  };

  const engineerChangeHandler = (event) => {
    
    if (event.target.value) {
      let sos = siteEngineers.filter((so) => {
        return so.username === event.target.value;
      });
      if (sos && sos[0]) {
        setSiteInfo({ ...siteInfo, siteEngineerId: sos[0].id });
      } else {
        sendRequest(
          {
            url:
              SB_SERVER_URL +
              SB_APPLICATION +
              SB_ACCOUNT +
              SB_DEALERSHIP +
              SB_SITE +
              SB_USERS +
              SB_USER +
              SB_SITE_ENGINEER +
              SB_SITE_ENGINEERS +
              "/" +
              event.target.value,
          },
          (data) => {
            setSiteEngineers([...data]);
          }
        );
      }
    }
  };

  return (
    <div className={ClassNames.NewEditSiteForm}>
      <div className={ClassNames.Column}>
        <h2>Site Details</h2>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={siteInfo.name}
            onChange={SiteInfoHandler}
          />
        </div>
        <div>
          <label>Number:</label>
          <input
            name="number"
            type="text"
            value={siteInfo.number}
            onChange={SiteInfoHandler}
          />
        </div>
        <div>
          <label>Latitude:</label>
          <p>{coords && coords.latitude ? coords.latitude : "NA"}</p>
        </div>
        <div>
          <label>Longitude:</label>
          <p>{coords && coords.longitude ? coords.longitude : "NA"}</p>
        </div>
        <div>
          <label>Latitude:</label>
          <input
            name="latitude"
            type="text"
            value={siteInfo.latitude}
            onChange={SiteInfoHandler}
          />
        </div>
        <div>
          <label>Longitude:</label>
          <input
            name="longitude"
            type="text"
            value={siteInfo.longitude}
            onChange={SiteInfoHandler}
          />
        </div>
        <div>
          <label>Engineer:</label>
          <input list="siteEngineers" onChange={engineerChangeHandler} defaultValue={siteInfo && siteInfo.siteEngineer?siteInfo.siteEngineer.username:""}/>
          <datalist id="siteEngineers">
            {siteEngineers.map((siteEngineer) => (
              <option key={siteEngineer.username} value={siteEngineer.username}>
                {siteEngineer.username}
              </option>
            ))}
            ;
          </datalist>
        </div>
        <div>
          <label>Owner:</label>
          <input list="siteOwners" onChange={ownerChangeHandler} defaultValue={siteInfo && siteInfo.siteOwner?siteInfo.siteOwner.username:""}/>
          <datalist id="siteOwners" >
            {siteOwners.map((siteOwner) => (
              <option key={siteOwner.username}>{siteOwner.username}</option>
            ))}
            ;
          </datalist>
        </div>
        <div>{""}</div>
      </div>
    </div>
  );
};

export default NewEditSiteForm;
