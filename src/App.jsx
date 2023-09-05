import "./App.css";
import React, { useState } from "react";

import Weather from "./components/Weather/Weather";
import DarkMode from "./components/common/Darkmode/Darkmode";


function App() {
  return (
    <div>
      <Weather />
      <DarkMode />
    </div>
  );
}

export default App;
