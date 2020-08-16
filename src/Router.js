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
            <Route path="/about">
              <h1>About</h1>
            </Route>
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default Router;
