import { useEffect, useState } from "react";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import { SB_ACCOUNT, SB_APPLICATION, SB_DEALERSHIP, SB_DEALERSHIPS, SB_SERVER_URL, SB_SMS } from "../../../../../Utils/Constants/BackendURIs";
import SimpleViewDealership from "./SimpleViewDealership/SimpleViewDealership";
import ClassNames from "./ViewDealerships.module.css";

const ViewDealerships = (props) => {
  const { loading, httpError, sendRequest } = useHttpV1();
  const [allDealershipsInfo, setAllDealershipsInfo] = useState([]);
  const [loadDealerships, setLoadDealerships] = useState(false);

  useEffect(() => {
    if (!loadDealerships) {
      setLoadDealerships(true);
      sendRequest(
        {
          url: SB_SERVER_URL+SB_SMS+SB_APPLICATION+SB_ACCOUNT+SB_DEALERSHIP+SB_DEALERSHIPS,
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
        (data) => {
          if (!httpError && !loading && data) {
            setAllDealershipsInfo([...data]);
          }
        }
      );
    }
  }, [httpError, loadDealerships, loading, props.id, sendRequest]);

  return (
    <div className={ClassNames.ViewDealerships}>
      {allDealershipsInfo.map((dealershipInfo1) => (
        <SimpleViewDealership dealershipInfo={dealershipInfo1} />
      ))}
    </div>
  );
};

export default ViewDealerships;
