import React from "react";
import ReactDOM from "react-dom";

import "leaflet/dist/leaflet.css";
import "./styles.css";
import Leaflet from "./Leaflet";

const App = () => <Leaflet />;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
