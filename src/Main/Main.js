import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import Pizzas from "../Components/Pizzas/Pizzas";

// Containing NavBar and Pizzas Component

class Main extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Pizzas />
      </div>
    );
  }
}

export default Main;

// Before Outputing the code Run JASON-SERVER (Data's)

// npm run server --watch data2/db.json
// npm start
