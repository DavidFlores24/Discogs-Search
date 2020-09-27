import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Artist, Search } from "./Routes";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/artist" component={Artist} />
          <Route path="/" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
