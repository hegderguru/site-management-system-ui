import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useHttpV1 from "../../../../../Hooks/useHttpV1";
import {
  SB_ACCOUNT,
  SB_APPLICATION,
  SB_DEALERSHIP,
  SB_DEALERSHIPS,
  SB_SERVER_URL,
  SB_SMS,
  SB_VIEW,
} from "../../../../../Utils/Constants/BackendURIs";
import ClassNames from "./AddEditDealershipList.module.css";

const AddEditDealershipList = (props) => {
  const [dealershipSearchName, setDealershipSearchName] = useState(null);
  const [dealershipsList, setDealershipsList] = useState([]);
  const [addedDealerships, setAddedDealerships] = useState([]);
  const { loading, httpError, sendRequest } = useHttpV1();

  useEffect(()=>{
    console.log("location.state.ids",props.ids[0]);
    if(dealershipsList.length===0 && props.ids[0]){
      sendRequest(
        {
          url:
            SB_SERVER_URL +
            SB_SMS +
            SB_APPLICATION +
            SB_ACCOUNT +
            SB_DEALERSHIP +
            SB_VIEW +
            "/" +
            props.ids[0],
        },
        (data, hasHttpError, isLoading) => {
          if (!hasHttpError && !isLoading ) {
            setDealershipsList([ {
              id: data.id,
              name: data.name,
              number: data.number,
              numberName: data.number + ":" + data.name,
            }])

            setAddedDealerships([ {
              id: data.id,
              name: data.name,
              number: data.number,
              numberName: data.number + ":" + data.name,
            }]);
          }
        }
      );
    }    

  },[dealershipsList.length, props.ids, sendRequest])

  const fetchDealershipsList = (dealershipSearchName) => {
    setDealershipSearchName(dealershipSearchName);
    if (dealershipSearchName) {
      sendRequest(
        {
          url:
            SB_SERVER_URL +
            SB_SMS +
            SB_APPLICATION +
            SB_ACCOUNT +
            SB_DEALERSHIP +
            SB_DEALERSHIPS +
            "/" +
            dealershipSearchName,
        },
        (data, hasHttpError, isLoading) => {
          if (!hasHttpError && !isLoading && data.length > 0) {
            setDealershipsList(
              data.map((data1) => {
                return {
                  id: data1.id,
                  name: data1.name,
                  number: data1.number,
                  numberName: data1.number + ":" + data1.name,
                };
              })
            );
          }
        }
      );
    }
  };

  const addRemoveDealershipInfoHandler = (dealershipNumberName) => {
    let addDealership = dealershipsList.filter(
      (dealership) =>
        dealership.number + ":" + dealership.name ===
        (dealershipNumberName && dealershipNumberName.length > 0
          ? dealershipNumberName
          : dealershipSearchName)
    );

    if (addDealership.length !== 0) {
      if (dealershipNumberName && dealershipNumberName.length > 0) {
        setAddedDealerships(
          addedDealerships.filter(
            (dealership) =>
              dealership.number + ":" + dealership.name !== dealershipNumberName
          )
        );
        addedDealerships.slice(addedDealerships.indexOf(addDealership[0]), 1);
      } else {
        let addDealership2 = addedDealerships.filter(
          (dealership) =>
            dealership.number + ":" + dealership.name === dealershipSearchName
        );
        if (addDealership2.length === 0) {
          addedDealerships.push(addDealership[0]);
        }
        setAddedDealerships([...addedDealerships]);
      }
    }
    console.log("addedDealerships",addedDealerships);
    props.fetchDealershipsInfo(addedDealerships);
  };

  return (
    <div className={ClassNames.AddEditDealershipList}>
      <div className={ClassNames.Columns}>
        <h2>Dealership List</h2>
        <div>
          <label htmlFor="dealershipList">Select Dealership: </label>
        </div>
        <div>
          <input
            list="dealershipList"
            onChange={(event) => fetchDealershipsList(event.target.value)}
            placeholder="Type Dealer Name/Number"
            defaultValue=""
          />
          <datalist id="dealershipList">
            {dealershipsList
              ? dealershipsList.map((dealership) => {
                  return (
                    <option
                      key={dealership.id}
                      id={dealership.id}
                      value={
                        dealership.number + ":" + dealership.name
                          ? dealership.number + ":" + dealership.name
                          : ""
                      }
                    />
                  );
                })
              : null}
          </datalist>
          <button type="button" onClick={addRemoveDealershipInfoHandler}>
            Add
          </button>
        </div>
        <div>
          <div>
            {addedDealerships && addedDealerships.length > 0
              ? addedDealerships.map((dealership) => (
                  <div key={dealership.id}>
                    <p>
                      {dealership.number}:{dealership.name}
                    </p>
                    <span
                      onClick={() =>
                        addRemoveDealershipInfoHandler(
                          dealership.number + ":" + dealership.name
                        )
                      }
                    >
                      -Remove
                    </span>
                  </div>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEditDealershipList;
