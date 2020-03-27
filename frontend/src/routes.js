import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

export default function Routes({ toggleTheme }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon} />
        <Route path="/register" component={Register} />
        <Route
          path="/profile"
          render={props => <Profile {...props} toggleTheme={toggleTheme} />}
        />
      </Switch>
    </BrowserRouter>
  );
}
