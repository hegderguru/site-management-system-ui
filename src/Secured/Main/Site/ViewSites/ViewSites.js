import { useEffect, useState } from "react";
import useHttpV1 from "../../../../Hooks/useHttpV1";
import { SB_ACCOUNT, SB_APPLICATION, SB_DEALERSHIP, SB_SERVER_URL, SB_SITE, SB_SITES, SB_SMS } from "../../../../Utils/Constants/BackendURIs";
import SimpleViewSite from "./SimpleViewSite/SimpleViewSite";
import ClassNames from "./ViewSites.module.css";


const ViewSites = (props) => {
  const { loading, httpError, sendRequest } = useHttpV1();
  const [allSitesInfo, setAllSitesInfo] = useState([]);
  const [loadSites, setLoadSites] = useState(false);

  useEffect(() => {
    if (!loadSites) {
      setLoadSites(true);
      sendRequest(
        {
          url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ACCOUNT+SB_DEALERSHIP+SB_SITE+SB_SITES,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
        (data) => {
          if (!httpError && !loading && data) {
            setAllSitesInfo([...data]);
          }
        }
      );
    }
  }, [httpError, loadSites, loading, props.id, sendRequest]);

  return (
    <div className={ClassNames.ViewSites}>
      {allSitesInfo.map((siteInfo1) => (
        <SimpleViewSite siteInfo={siteInfo1} />
      ))}
     
    </div>
  );
};

export default ViewSites;
