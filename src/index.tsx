import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { initializeApp } from "firebase/app";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEgGl7scGgSGsXaOpi29t5fizxP5hRQrg",
  authDomain: "react-ifc.firebaseapp.com",
  projectId: "react-ifc",
  storageBucket: "react-ifc.appspot.com",
  messagingSenderId: "768475162852",
  appId: "1:768475162852:web:67f167b63cf841971b24f1"
};

 initializeApp(firebaseConfig);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
