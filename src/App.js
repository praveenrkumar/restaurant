import React from "react";
import Login from "./Components/Login/Login";
import Main from "./Main/Main";
import { Route, Switch } from "react-router-dom";

// Used Routing to Move from One Component to Another;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/Main" component={Main} />
      </Switch>
    </div>
  );
}

export default App;

// Before Outputing the code Run JASON-SERVER (Data's)

// npm run server --watch data2/db.json
// npm start
