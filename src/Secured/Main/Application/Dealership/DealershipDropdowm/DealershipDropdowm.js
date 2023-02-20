import { useEffect } from "react";

const DealershipDropdowm = (props) => {
  useEffect(() => {
    if (props.id && !loadDealership) {
      setLoadDealership(true);
      console.log(!dealersipInfo.name);
      sendRequest({ url: FIND_DEALERSHIP + props.id }, (data) => {
        setDealersipInfo({
          ...dealersipInfo,
          number: data.number,
          name: data.name,
          email: data.email,
          phone: data.phone,
        });
      });
    }
    return props.fetchDealersipInfo(dealersipInfo);
  }, [dealersipInfo, loadDealership, props, sendRequest]);

  return (
    <div>
      <label>Access Type</label>
      <select
        name="acessType"
        value={defaultSelect}
        onChange={OnSelectChangeHandler}
      >
        <option value={ACCESS_TYPE_READ}>{ACCESS_TYPE_READ}</option>
        <option value={ACCESS_TYPE_WRITE}>{ACCESS_TYPE_WRITE}</option>
        <option value={ACCESS_TYPE_UPDATE}>{ACCESS_TYPE_UPDATE}</option>
        <option value={ACCESS_TYPE_SHARE}>{ACCESS_TYPE_SHARE}</option>
      </select>
    </div>
  );
};

export default DealershipDropdowm;
