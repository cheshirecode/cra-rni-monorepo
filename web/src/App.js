import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import test from "core/test";
import C from "core/component";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <p>core/test value - {test}</p>
        </p>
        <C>{({ value }) => <pre>shared core/component with {value}</pre>}</C>
      </div>
    );
  }
}

export default App;
