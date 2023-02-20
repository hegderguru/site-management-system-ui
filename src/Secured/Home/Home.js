import ClassNames from "./Home.module.css";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";

const Home = (props) => {
  return (
    <div className={ClassNames.Home}>
      <div className={ClassNames.header}>
        <Header />
      </div>
      <div className={ClassNames.sidebar}><Sidebar/></div>
      <div className={ClassNames.main}><Main/></div>
      <div className={ClassNames.footer}></div>
    </div>
  );
};
export default Home;
