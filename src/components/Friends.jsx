import React, { Component } from "react";
import NavBar from "./NavBar";

class Friends extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <div
          className="jumbotron jumbotron-fluid"
          style={{ backgroundColor: "#b4aee8" }}
        >
          <div className="container">
            <h1 className="display-3">Friends</h1>
            <p className="lead">
              Welcome to your Friends page... Here you have an opportunity to
              make a list of your favorite people
            </p>
          </div>
        </div>
        <div className="container">
          <h1>Add or Edit a Friend</h1>
          <div className="row">
            <div className="col form-group">
              <form id="FriendsForm">
                <p>
                  <label htmlFor="title">Title:</label>
                  <input type="text" name="firstName" />
                </p>
                <p>
                  <label htmlFor="lastName">Last Name:</label>
                  <input
                    type="text"
                    name="lastName"
                    onChange={this.onFormFieldChange}
                  />
                </p>

                <button
                  type="submit"
                  className="btn btn-warning"
                  style={{ backgroundColor: "#ffd880" }}
                  onClick={this.onRegisterButtonClicked}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Friends;
