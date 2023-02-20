import ClassNames from "./AddEditSimpleDealershipList.module.css";

const AddEditSimpleDealershipList = (props) => {
  return (
    <div className={ClassNames.Columns}>
      <h2>Simple Dealership List</h2>
      <div>
        <label htmlFor="dealershipList">Select Dealership: </label>
        <input
          list="dealershipList"
          onChange={(event) => props.fetchDealershipsList(event.target.value)}
          placeholder="Type Dealer Name/Number"
          defaultValue=""
        />
        <datalist id="dealershipList">
          {props.dealershipsList
            ? props.dealershipsList.map((dealership) => {
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
        <button type="button" onClick={props.addRemoveDealershipInfoHandler}>
          Add
        </button>
      </div>
      <div>
        <div>
          {props.addedDealerships && props.addedDealerships.length > 0
            ? props.addedDealerships.map((dealership) => (
                <div key={dealership.id}>
                  <p>
                    {dealership.number}:{dealership.name}
                  </p>
                  <span
                    onClick={() =>
                      props.addRemoveDealershipInfoHandler(
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
  );
};

export default AddEditSimpleDealershipList;
