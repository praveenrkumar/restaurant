import React from "react";
import axios from "axios";
import Pizza from "./Pizza";

class Pizzas extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pizzas: [], searchData: [] };
  }

  // Getting Data from "JASON-SERVER" using AXIOS

  componentDidMount() {
    axios.get(`http://localhost:3000/pizzas`).then((response) => {
      console.log(response);
      this.setState({ searchData: response.data, pizzas: response.data });
    });
  }

  handleChange = (e) => {
    const searchData = this.state.pizzas.filter((data) =>
      data.name.startsWith(`${e.target.value}`)
    );
    this.setState({ searchData });
  };

  // Pizzas (Parent Component)

  render() {
    console.log("Data", this.state.searchData);
    return (
      <div>
        <div className="offset-4 ">
          <input
            type="text"
            placeholder="Search for your Favroite Pizza's "
            onChange={this.handleChange}
          />
        </div>
        <div className="row">
          {this.state.searchData.map((pizza) => (
            // Passing Data to "Child Component" as a Prop (Pizza.js)
            <div className="col-4">
              <Pizza pizza={pizza} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Pizzas;

// Before Outputing the code Run JASON-SERVER (Data's)

// npm run server --watch data2/db.json
// npm start
