// Server
export const SERVER_URL = "http://localhost:8080";

//Application
export const APPLICATION = "/application";

//Account
export const ACCOUNT = APPLICATION+"/account";
export const FIND_ACCOUNT = ACCOUNT+"/";

//Dealership
export const DEALERSHIP = ACCOUNT+"/dealership";
export const REGISTER_DEALERSHIP = DEALERSHIP+"/register";
export const UPDATE_DEALERSHIP = DEALERSHIP+"/update";
export const FIND_ALL_DEALERSHIPS = DEALERSHIP+"/dealerships";
export const SEARCH_ALL_DEALERSHIPS = DEALERSHIP+"/dealerships/";
export const FIND_DEALERSHIP = DEALERSHIP+"/dealerships/";

//User
export const USER = "/user";
export const ADD_USER = USER+"/register";
export const UPDATE_USER = USER+"/update";
export const VIEW_USER = USER+"/find/";
export const VIEW_ALL_USERS = USER+"/findAll";

//DealershipUser
export const ADD_DEALERSHIP_USER = USER+REGISTER_DEALERSHIP;
export const UPDATE_DEALERSHIP_USER = USER+UPDATE_DEALERSHIP;
export const FIND_ALL_DEALERSHIPS_USERS = USER+FIND_ALL_DEALERSHIPS;










export const SB_HTTP_METHOD_GET="GET";
export const SB_HTTP_METHOD_POST="POST";
export const SB_HTTP_HEADER_CONTENT_TYPE_NAME="Content-Type";
export const SB_HTTP_HEADER_CONTENT_TYPE_VALUE="application/json";
export const SB_WELCOME="/";
export const SB_LOGIN="/login";
export const SB_AUTHENTICATE="/authenticate"
export const SB_ADD="/add"
export const SB_VIEW="/view"
export const SB_UPDATE="/update"

// Server
export const SB_SERVER_URL = "http://localhost:8080";

//SMS
export const SB_SMS = "/sms";

//Application
export const SB_APPLICATION = "/application";
//Account
export const SB_ACCOUNTS = "/accounts";
export const SB_ACCOUNT = "/account";

//Dealership
export const SB_DEALERSHIPS = "/dealerships";
export const SB_DEALERSHIP = "/dealership";

//Site
export const SB_SITES = "/sites";
export const SB_SITE = "/site";

//Engineer
export const SB_SITE_ENGINEERS = "/engineers";
export const SB_SITE_ENGINEER = "/engineer";

//Owner
export const SB_SITE_OWNERS = "/owners";
export const SB_SITE_OWNER = "/owner";

//Users
export const SB_USERS="/users"
export const SB_USER="/user"

//Users
export const SB_ADDRESSES="/addresses"
export const SB_ADDRESS="/address"















