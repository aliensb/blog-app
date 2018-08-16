import React from "react";
import ReactDOM from "react-dom";
import "antd/lib/pagination/style/css";
import "bootstrap/dist/css/bootstrap.css";
import "./static/caomei.css";
import "./static/prism.css";
import "./static/style.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
