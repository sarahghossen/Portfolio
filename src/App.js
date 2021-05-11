import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Homepage from "./Homepage";
import GlobalStyles from "./GlobalStyles";
import Header from "./Header";

function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
