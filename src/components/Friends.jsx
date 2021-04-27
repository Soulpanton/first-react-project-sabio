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

                <div className="form-group row">
                  <label htmlFor="title">Title:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="title"
                      onChange={this.onFormFieldChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="bio">Bio:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="bio"
                      onChange={this.onFormFieldChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="summary">Summary:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="summary"
                      onChange={this.onFormFieldChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="headline">Headline:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="headline"
                      onChange={this.onFormFieldChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="slug">Slug:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="slug"
                      onChange={this.onFormFieldChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="status">Status:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="status"
                      onChange={this.onFormFieldChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="skills">Skills:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="skills"
                      onChange={this.onFormFieldChange}
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="primaryImage">Primary Image:</label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      name="primaryImage"
                      onChange={this.onFormFieldChange}
                    />
                  </div>
                </div>

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
