import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "./i18n";
import App from "./App";

const loadingMarkup = (
  <div className="py-4 text-center">
    <h2>Loading...</h2>
  </div>
);
ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById("root")
);
