import { Base64 } from "js-base64";
import { useCallback, useContext, useState } from "react";
import AuthContext from "../Secured/store/context/AuthContext/AuthContext";
import { SB_HTTP_HEADER_CONTENT_TYPE_VALUE } from "../Utils/Constants/BackendURIs";

const useHttpV1 = () => {
  const [loading, setLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);
  const context = useContext(AuthContext);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setLoading(true);
    setHttpError(null);
    let authString = Base64.encode(((requestConfig.username
      ? requestConfig.username
      : context.username) + ":" + (requestConfig.password
      ? requestConfig.password
      : context.password))
    );
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        credentials: "include",
        headers: requestConfig.headers
          ? {
              ...requestConfig.headers,
              "Content-Type": SB_HTTP_HEADER_CONTENT_TYPE_VALUE,
              Authorization: "Basic " + authString,
            }
          : {
              "Content-Type": SB_HTTP_HEADER_CONTENT_TYPE_VALUE,
              Authorization: "Basic " + authString,
            },
        body: requestConfig.body
          ? JSON.stringify(requestConfig.body)
          : JSON.stringify(),
      });
      if (!response.ok) {
        throw new Error("Request failed!");
      } else {
        const data = await response.json();
        applyData(data,false,false);
      }
    } catch (e) {
      setHttpError(e.toString());
    }
    setLoading(false);
    setHttpError(null);
  }, [context.password, context.username]);

  return {
    loading,
    httpError,
    sendRequest,
  };
};

export default useHttpV1;
