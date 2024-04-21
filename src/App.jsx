//import { onAuthStateChanged } from "firebase/auth";
//import { auth } from "../utils/firebase";
import { Provider } from "react-redux";
//import { addUser, removeUser } from "../utils/userSlice";
import appStore from "./utils/appStore";
import AppComponent from "./components/AppComponent";
import { Auth0Provider } from "@auth0/auth0-react";

const App = () => {
  return (
    <Auth0Provider
      domain="dev-0ubs56t4852zfaw6.us.auth0.com"
      clientId="oCYQBIBApEAM5pa2LN4MNBgiiQpaRN4e"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Provider store={appStore}>
        <AppComponent />
      </Provider>
    </Auth0Provider>
  );
};

export default App;
