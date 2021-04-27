import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import SiteNav from "./components/SiteNav";
import Jumbo from "./components/Jumbo";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import "rc-pagination/assets/index.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Form from "./components/Form";
import Friends from "./components/Friends";
import ProductForm from "./components/ProductForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {/* <button className="btn btn-outline-info m-2"><NavLink to="/Welcome">Go Home</NavLink></button> */}
        {/* <button className="btn btn-outline-info m-2"><NavLink to="/siteNav">Go to SiteNav</NavLink></button>
        <button className="btn btn-outline-primary m-2"><NavLink to="/Register">Register</NavLink></button>
        <button className="btn btn-outline-secondary m-2"><NavLink to="/login">Login</NavLink></button>
        <button className="btn btn-outline-success m-2"><NavLink to="/jumbo">Go to Jumbo</NavLink></button>
        <button className="btn btn-outline-success m-2"><NavLink to="/footer">Go to Footer</NavLink></button> */}

        {/* <Route path="/" exact={true} component={Welcome}></Route> */}
        <Route path="/siteNav" exact={true} component={SiteNav}></Route>
        <Route path="/jumbo" exact={true} component={Jumbo}></Route>
        <Route path="/Register" exact={true} component={Register}></Route>
        <Route path="/login" exact={true} component={Login}></Route>
        <Route path="/footer" exact={true} component={Footer}></Route>
        <Route path="/welcome" exact={true} component={Welcome}></Route>
        <Route path="/friends" exact={true} component={Friends}></Route>
        <Route path="/productForm" exact={true} component={ProductForm}></Route>
        <Route path="/form" exact={true} component={Form}></Route>
      </BrowserRouter>
    );
  }
}

export default App;
