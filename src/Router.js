import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";

function Router() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/*  */}
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/profile" component={Profile} />
          <Route path="/">
            <h1>Root</h1>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
