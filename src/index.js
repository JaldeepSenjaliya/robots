import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "tachyons";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);

//ReactDOM.render(<CardList robots={robots} />, document.getElementById("root"));
//ReactDOM.render(<CardList robots={robots} />, document.getElementById("root"));
