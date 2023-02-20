import { useEffect, useState } from "react";
import useHttpV1 from "../../../../../Hooks/useHttpV1";

import {
  SB_ACCOUNT,
  SB_ACCOUNTS,
  SB_APPLICATION,
  SB_HTTP_METHOD_GET,
  SB_SERVER_URL,
  SB_SMS,
  SB_HTTP_HEADER_CONTENT_TYPE_NAME,
  SB_HTTP_HEADER_CONTENT_TYPE_VALUE,
} from "../../../../../Utils/Constants/BackendURIs";
import SimpleViewAccount from "./SimpleViewAccount/SimpleViewAccount";
import ClassNames from "./ViewAccounts.module.css";

const ViewAccounts = (props) => {
  const { loading, httpError, sendRequest } = useHttpV1();
  const [allAccountsInfo, setAllAccountsInfo] = useState([]);

  useEffect(() => {
    if (allAccountsInfo.length === 0) {
      sendRequest(
        {
          url:
            SB_SERVER_URL + SB_SMS + SB_APPLICATION + SB_ACCOUNT + SB_ACCOUNTS,
          method: SB_HTTP_METHOD_GET,
          headers: {
            SB_HTTP_HEADER_CONTENT_TYPE_NAME: SB_HTTP_HEADER_CONTENT_TYPE_VALUE,
          },
        },
        (data,hasHttpError,isLoading) => {
          if (!hasHttpError && !isLoading && data) {
            // data.array.forEach(element => {
            //     setAllAccountsInfo(allAccountsInfo=> [...allAccountsInfo,{name:element.name,number:element.number}]);
            // });
            setAllAccountsInfo([...data]);
          }
        }
      );
    }
  }, [allAccountsInfo.length, sendRequest]);

  return (
    <div className={ClassNames.ViewAccounts}>
      {allAccountsInfo.length === 0 ? (
        <div>
          <h2>There are no accounts</h2>
        </div>
      ) : null}
      {allAccountsInfo.map((accountsInf1) => (
        <SimpleViewAccount accountInfo={accountsInf1} />
      ))}
    </div>
  );
};

export default ViewAccounts;
