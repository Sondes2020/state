import React, { useState } from "react";
import CountComponent from "./countComponent";

import "./App.css";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {/* <CountComponent /> */}
      <hr />
      <button className="visibility-btn" onClick={() => setShow(!show)}>
        {show ? "Hide Counter" : "Show Counter"}
      </button>
      {show && <CountComponent />}
    </div>
  );
}
