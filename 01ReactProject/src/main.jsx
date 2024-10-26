import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

const AnotherElement = (
  <a href="https://google.com" target="_blank">
    {" "}
    go google{" "}
  </a>
);
//accoding to React format
const reactElement = React.createElement("a", { href: "https://google.com",target:'_blank' },'go google');
ReactDOM.createRoot(document.getElementById("root")).render
(
  <>
  <reactElement/> // we can directely write work same like this
  <App/>
  </>
  );
