import { Outlet, Route, Routes } from "react-router-dom";
import {
  RJS_ACCOUNT,
  RJS_ACCOUNTS,
  RJS_ADD,
  RJS_APPLICATION,
  RJS_DEALERSHIP,
  RJS_DEALERSHIPS,
  RJS_SITE,
  RJS_SITES,
  RJS_SITE_ENGINEER,
  RJS_SITE_OWNER,
  RJS_SMS,
  RJS_UPDATE,
  RJS_USER,
  RJS_USERS,
  RJS_VIEW,
} from "../../Utils/Constants/FrontEndURIs";
import ClassNames from "./Main.module.css";
import AddEditSampleUser from "./User/SampleUser/AddEditSampleUser/AddEditSampleUser";
import ViewSampleUser from "./User/SampleUser/ViewSampleUser/ViewSampleUser";
import ViewSampleUsers from "./User/SampleUser/ViewSampleUsers/ViewSampleUsers";

import CreateAccount from "./Application/Account/CreateAccount/CreateAccount";
import ViewAccounts from "./Application/Account/ViewAccounts/ViewAccounts";
import ViewAccount from "./Application/Account/ViewAccount/ViewAccount";
import UpdateAccount from "./Application/Account/UpdateAccount/UpdateAccount";

import AddEditDealership from "./Application/Dealership/AddEditDealership/AddEditDealership";
import ViewDealerships from "./Application/Dealership/ViewDealerships/ViewDealerships";
import ViewDealership from "./Application/Dealership/ViewDealership/ViewDealership";
import Userslayout from "./User/Userslayout";
import {
  SB_ACCOUNT,
  SB_ADD,
  SB_APPLICATION,
  SB_DEALERSHIP,
  SB_SERVER_URL,
  SB_SITE,
  SB_SITE_ENGINEER,
  SB_UPDATE,
  SB_USER,
  SB_USERS,
  SB_VIEW,
} from "../../Utils/Constants/BackendURIs";
import {
  USER_TYPE_ACCOUNT,
  USER_TYPE_APPLICATION,
  USER_TYPE_DEALERSHIP,
  USER_TYPE_SITE_ENGINEER,
  USER_TYPE_SITE_OWNER,
} from "../../Utils/Constants";
import AddEditSite from "./Site/AddEditSite/AddEditSite";
import ViewSites from "./Site/ViewSites/ViewSites";
import ViewSite from "./Site/ViewSite/ViewSite";

const Main = (props) => {
  return (
    <div className={ClassNames.Main}>
      <Routes>
        {/* Users */}
        <Route
          path={RJS_APPLICATION + RJS_USERS + RJS_USER}
          element={<Userslayout />}
        >
          <Route
            path={"users"}
            element={
              <ViewSampleUsers
                rjsViewUsersPath={RJS_SMS + RJS_APPLICATION + RJS_USERS}
                rjsViewUserPath={
                  RJS_SMS + RJS_APPLICATION + RJS_USERS + RJS_USER + RJS_VIEW
                }
                rjsAddUserPath={
                  RJS_SMS + RJS_APPLICATION + RJS_USERS + RJS_USER + RJS_ADD
                }
                rjsUpdateUserPath={
                  RJS_SMS + RJS_APPLICATION + RJS_USERS + RJS_USER + RJS_UPDATE
                }
                sbViewUsersPath={
                  SB_SERVER_URL + SB_APPLICATION + SB_USERS + SB_USER + SB_USERS
                }
                sbViewUserPath={
                  SB_SERVER_URL + SB_APPLICATION + SB_USERS + SB_USER + SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL + SB_APPLICATION + SB_USERS + SB_USER + SB_ADD
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_USERS +
                  SB_USER +
                  SB_UPDATE
                }
                userType={USER_TYPE_APPLICATION}
              />
            }
          />
          <Route
            path={"add"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS + RJS_APPLICATION + RJS_USERS + RJS_USER + RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL + SB_APPLICATION + SB_USERS + SB_USER + SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL + SB_APPLICATION + SB_USERS + SB_USER + SB_ADD
                }
                userType={USER_TYPE_APPLICATION}
              />
            }
          />
          <Route
            path={"view"}
            element={
              <ViewSampleUser
                rjsUpdateUserPath={
                  RJS_SMS + RJS_APPLICATION + RJS_USERS + RJS_USER + RJS_UPDATE
                }
                sbViewUserPath={
                  SB_SERVER_URL + SB_APPLICATION + SB_USERS + SB_USER + SB_VIEW
                }
                userType={USER_TYPE_APPLICATION}
              />
            }
          />
          <Route
            path={"update"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS + RJS_APPLICATION + RJS_USERS + RJS_USER + RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL + SB_APPLICATION + SB_USERS + SB_USER + SB_VIEW
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_USERS +
                  SB_USER +
                  SB_UPDATE
                }
                userType={USER_TYPE_APPLICATION}
              />
            }
          />
        </Route>

        <Route
          path={RJS_APPLICATION + RJS_ACCOUNT + RJS_USERS + RJS_USER}
          element={<Userslayout />}
        >
          <Route
            path={"users"}
            element={
              <ViewSampleUsers
                rjsViewUsersPath={
                  RJS_SMS + RJS_APPLICATION + RJS_ACCOUNT + RJS_USERS
                }
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_USERS +
                  RJS_USER +
                  RJS_VIEW
                }
                rjsAddUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_USERS +
                  RJS_USER +
                  RJS_ADD
                }
                rjsUpdateUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_USERS +
                  RJS_USER +
                  RJS_UPDATE
                }
                sbViewUsersPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_USERS +
                  SB_USER +
                  SB_USERS
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_USERS +
                  SB_USER +
                  SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_USERS +
                  SB_USER +
                  SB_ADD
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_USERS +
                  SB_USER +
                  SB_UPDATE
                }
                userType={USER_TYPE_ACCOUNT}
              />
            }
          />
          <Route
            path={"add"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_USERS +
                  RJS_USER +
                  RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_USERS +
                  SB_USER +
                  SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_USERS +
                  SB_USER +
                  SB_ADD
                }
                userType={USER_TYPE_ACCOUNT}
              />
            }
          />
          <Route
            path={"view"}
            element={
              <ViewSampleUser
                rjsUpdateUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_USERS +
                  RJS_USER +
                  RJS_UPDATE
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_USERS +
                  SB_USER +
                  SB_VIEW
                }
                userType={USER_TYPE_ACCOUNT}
              />
            }
          />
          <Route
            path={"update"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_USERS +
                  RJS_USER +
                  RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_USERS +
                  SB_USER +
                  SB_VIEW
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_USERS +
                  SB_USER +
                  SB_UPDATE
                }
                userType={USER_TYPE_ACCOUNT}
              />
            }
          />
        </Route>

        <Route
          path={
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_DEALERSHIP +
            RJS_USERS +
            RJS_USER
          }
          element={<Userslayout />}
        >
          <Route
            path={"users"}
            element={
              <ViewSampleUsers
                rjsViewUsersPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_USERS
                }
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_USERS +
                  RJS_USER +
                  RJS_VIEW
                }
                rjsAddUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_USERS +
                  RJS_USER +
                  RJS_ADD
                }
                rjsUpdateUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_USERS +
                  RJS_USER +
                  RJS_UPDATE
                }
                sbViewUsersPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_USERS +
                  SB_USER +
                  SB_USERS
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_USERS +
                  SB_USER +
                  SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_USERS +
                  SB_USER +
                  SB_ADD
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_USERS +
                  SB_USER +
                  SB_UPDATE
                }
                userType={USER_TYPE_DEALERSHIP}
              />
            }
          />
          <Route
            path={"add"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_USERS +
                  RJS_USER +
                  RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_USERS +
                  SB_USER +
                  SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_USERS +
                  SB_USER +
                  SB_ADD
                }
                userType={USER_TYPE_DEALERSHIP}
              />
            }
          />
          <Route
            path={"view"}
            element={
              <ViewSampleUser
                rjsUpdateUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_USERS +
                  RJS_USER +
                  RJS_UPDATE
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_USERS +
                  SB_USER +
                  SB_VIEW
                }
                userType={USER_TYPE_DEALERSHIP}
              />
            }
          />
          <Route
            path={"update"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_USERS +
                  RJS_USER +
                  RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_USERS +
                  SB_USER +
                  SB_VIEW
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_USERS +
                  SB_USER +
                  SB_UPDATE
                }
                userType={USER_TYPE_DEALERSHIP}
              />
            }
          />
        </Route>

        {/* Site   Engineer */}
        <Route
          path={
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_DEALERSHIP +
            RJS_SITE +
            RJS_USERS +
            RJS_USER +
            RJS_SITE_ENGINEER
          }
          element={<Userslayout />}
        >
          <Route
            path={"users"}
            element={
              <ViewSampleUsers
                rjsViewUsersPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_ENGINEER +
                  RJS_USERS
                }
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_ENGINEER +
                  RJS_VIEW
                }
                rjsAddUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_ENGINEER +
                  RJS_ADD
                }
                rjsUpdateUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_ENGINEER +
                  RJS_UPDATE
                }
                sbViewUsersPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  SB_SITE_ENGINEER +
                  SB_USERS
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  SB_SITE_ENGINEER +
                  SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  SB_SITE_ENGINEER +
                  SB_ADD
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  SB_SITE_ENGINEER +
                  SB_UPDATE
                }
                userType={USER_TYPE_SITE_ENGINEER}
              />
            }
          />
          <Route
            path={"add"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_ENGINEER +
                  RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  SB_SITE_ENGINEER +
                  SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  SB_SITE_ENGINEER +
                  SB_ADD
                }
                userType={USER_TYPE_SITE_ENGINEER}
              />
            }
          />
          <Route
            path={"view"}
            element={
              <ViewSampleUser
                rjsUpdateUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_ENGINEER +
                  RJS_UPDATE
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  SB_SITE_ENGINEER +
                  SB_VIEW
                }
                userType={USER_TYPE_SITE_ENGINEER}
              />
            }
          />
          <Route
            path={"update"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_ENGINEER +
                  RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  SB_SITE_ENGINEER +
                  SB_VIEW
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  SB_SITE_ENGINEER +
                  SB_UPDATE
                }
                userType={USER_TYPE_SITE_ENGINEER}
              />
            }
          />
        </Route>

        {/* Site   Owner */}
        <Route
          path={
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_DEALERSHIP +
            RJS_SITE +
            RJS_USERS +
            RJS_USER +
            RJS_SITE_OWNER
          }
          element={<Userslayout />}
        >
          <Route
            path={"users"}
            element={
              <ViewSampleUsers
                rjsViewUsersPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_OWNER +
                  RJS_USERS
                }
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_OWNER +
                  RJS_VIEW
                }
                rjsAddUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_OWNER +
                  RJS_ADD
                }
                rjsUpdateUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_OWNER +
                  RJS_UPDATE
                }
                sbViewUsersPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  RJS_SITE_OWNER +
                  SB_USERS
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  RJS_SITE_OWNER +
                  SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  RJS_SITE_OWNER +
                  SB_ADD
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  RJS_SITE_OWNER +
                  SB_UPDATE
                }
                userType={USER_TYPE_SITE_ENGINEER}
              />
            }
          />
          <Route
            path={"add"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_OWNER +
                  RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  RJS_SITE_OWNER +
                  SB_VIEW
                }
                sbAddUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  RJS_SITE_OWNER +
                  SB_ADD
                }
                userType={USER_TYPE_SITE_ENGINEER}
              />
            }
          />
          <Route
            path={"view"}
            element={
              <ViewSampleUser
                rjsUpdateUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_OWNER +
                  RJS_UPDATE
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  RJS_SITE_OWNER +
                  SB_VIEW
                }
                userType={USER_TYPE_SITE_ENGINEER}
              />
            }
          />
          <Route
            path={"update"}
            element={
              <AddEditSampleUser
                rjsViewUserPath={
                  RJS_SMS +
                  RJS_APPLICATION +
                  RJS_ACCOUNT +
                  RJS_DEALERSHIP +
                  RJS_SITE +
                  RJS_USERS +
                  RJS_USER +
                  RJS_SITE_OWNER +
                  RJS_VIEW
                }
                sbViewUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  RJS_SITE_OWNER +
                  SB_VIEW
                }
                sbUpdateUserPath={
                  SB_SERVER_URL +
                  SB_APPLICATION +
                  SB_ACCOUNT +
                  SB_DEALERSHIP +
                  SB_SITE +
                  SB_USERS +
                  SB_USER +
                  RJS_SITE_OWNER +
                  SB_UPDATE
                }
                userType={USER_TYPE_SITE_OWNER}
              />
            }
          />
        </Route>

        {/* Account */}

        <Route
          path={RJS_APPLICATION + RJS_ACCOUNT + RJS_ADD}
          element={<CreateAccount />}
        />
        <Route
          path={RJS_APPLICATION + RJS_ACCOUNT + RJS_ACCOUNTS}
          element={<ViewAccounts />}
        />
        <Route
          path={RJS_APPLICATION + RJS_ACCOUNT + RJS_VIEW}
          element={<ViewAccount />}
        />
        <Route
          path={RJS_APPLICATION + RJS_ACCOUNT + RJS_UPDATE + "/:id"}
          element={<UpdateAccount />}
        />

        {/* Dealership */}

        <Route
          path={RJS_APPLICATION + RJS_ACCOUNT + RJS_DEALERSHIP + RJS_ADD}
          element={<AddEditDealership />}
        />
        <Route
          path={
            RJS_APPLICATION + RJS_ACCOUNT + RJS_DEALERSHIP + RJS_DEALERSHIPS
          }
          element={<ViewDealerships />}
        />
        <Route
          path={RJS_APPLICATION + RJS_ACCOUNT + RJS_DEALERSHIP + RJS_VIEW}
          element={<ViewDealership />}
        />

        {/* Site */}

        <Route
          path={
            RJS_APPLICATION + RJS_ACCOUNT + RJS_DEALERSHIP + RJS_SITE + RJS_ADD
          }
          element={<AddEditSite />}
        />
        <Route
          path={
            RJS_APPLICATION +
            RJS_ACCOUNT +
            RJS_DEALERSHIP +
            RJS_SITE +
            RJS_SITES
          }
          element={<ViewSites />}
        />
        <Route
          path={
            RJS_APPLICATION + RJS_ACCOUNT + RJS_DEALERSHIP + RJS_SITE + RJS_VIEW
          }
          element={<ViewSite />}
        />
      </Routes>
      <Outlet />
    </div>
  );
};

export default Main;
