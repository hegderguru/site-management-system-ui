import ClassNames from "./ViewSimpleDealershipList.module.css";

const ViewSimpleDealershipList = (props) => {
  return (
    <div className={ClassNames.Columns}>
      <h2>Dealership List</h2>
      <div>
        <div>
          {props.addedDealerships && props.addedDealerships.length > 0
            ? props.addedDealerships.map((dealership) => (
                <div key={dealership.id}>
                  <p>
                    {dealership.number}:{dealership.name}
                  </p>
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default ViewSimpleDealershipList;
