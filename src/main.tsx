import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { globalStyles } from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./lib/apollo";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

globalStyles();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
