import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage"


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path ="/">
        <HomePage/>
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
