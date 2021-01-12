import React from "react";
import ReactDOM from "react-dom";
import { toast } from "react-toastify";
import App from "containers/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
// import { initializeFirebase, askForPermissionToReceiveNotifications } from './push-notification'
// import * as firebase from 'firebase'

toast.configure();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// initialize firebase for push notification.
// initializeFirebase();
// const messaging = firebase.messaging();
// messaging.usePublicVapidKey("BEsBewuGG1j0DvOr65lpGnMXHGWwqwvrLCn5VAIZ0M6v9EAGX0EfNgQ7AGDrpXfFZIt8IhPUJteObE3Gnb9XL9s");

// if(!localStorage.getItem("notification-token")){
// 	askForPermissionToReceiveNotifications();
// }

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
// if ('serviceWorker' in navigator) {
//   navigator.serviceWorker.register('../firebase-messaging-sw.js')
//   .then(function(registration) {
//     console.log('Registration successful, scope is:', registration.scope);
//   }).catch(function(err) {
//     console.log('Service worker registration failed, error:', err);
//   });
// }
