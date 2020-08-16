import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import { ContextProvider } from "./contexts/MyContext";
import Home from "./pages/Home";

function Router() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <div>
          <Navbar />
          {/*  */}
          <Switch>
            <Route exact path="/about">
              <h1>About</h1>
            </Route>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="*">
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default Router;
