import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import App from "App";
// import { initializeFirebase, askForPermissionToReceiveNotifications } from './push-notification'
// import * as firebase from 'firebase'

toast.configure();
ReactDOM.render(
  <Fragment>
    <App />
  </Fragment>,
  document.getElementById("root")
);

/* initialize firebase for push notification.
initializeFirebase();
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BEsBewuGG1j0DvOr65lpGnMXHGWwqwvrLCn5VAIZ0M6v9EAGX0EfNgQ7AGDrpXfFZIt8IhPUJteObE3Gnb9XL9s"); */

/* If you want your app to work offline and load faster, you can change
unregister() to register() below. Note this comes with some pitfalls.
Learn more about service workers: https://bit.ly/CRA-PWA */

serviceWorker.register();
