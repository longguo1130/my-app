import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from './screens/home';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={require('./home-3.png')} className="" alt="logo" />
      </header> */}
      <Home />
    </div>
  );
}

export default App;
