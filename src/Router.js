import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { ContextProvider } from "./contexts/MyContext";

function Router() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          {/*  */}
          <Switch>
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/">
              <h1>Root</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default Router;
