import React from "react";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }

  onLoginClick = () => {
    this.props.history.push("Main");
  };
  render() {
    return (
      <div className="row">
        <div className=" offset-4">
          <h4 className="m-1 p-2 border-bottom">Login</h4>
          <div className="mt-5">
            {/* E-mail starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">
                E-Mail:
                <input
                  type="text"
                  className="form-control"
                  value={this.state.email}
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                    console.log(this.state.email);
                  }}
                />
              </label>
            </div>
            {/* E-Mail ends */}
            {/* Password-Starts */}
            <div className="form-group form-row">
              <label className="col-lg-4">
                Password:
                <input
                  type="password"
                  className="form-control"
                  value={this.state.password}
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                    console.log(this.state.password);
                  }}
                />
              </label>
            </div>
            {/* Password-Ends */}
            <div>
              <button
                className="btn btn-primary m-2 p-2"
                onClick={this.onLoginClick}
              >
                Log-In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
