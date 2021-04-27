import React, { Component } from "react";
import { current, logout } from "../services/userService";
import { toast } from "react-toastify";

import NavBar from "./NavBar";

class Welcome extends Component {
    state = {
        formData: {
            name: "",
            id: "",
            tenantId: ""
        }
    }

    componentDidMount = () => {
        console.log("componentDidMount is executing")
        current()
            .then(this.onCurrentUserSuccess)
            .catch(this.onCurrentUserError)
    };
    onCurrentUserSuccess = (response) => {
        console.log("current Success", response.data.item.name)
        this.setState(() => {
            const formData = { ...this.state.formData };
            formData.name = response.data.item.name;
            console.log(formData)
            return { formData };
        })
    }
    onCurrentUserError = (response) => {
        console.warn("No current user available")
    }

    onClickLogoutButton = (e) => {
        e.preventDefault();
        console.log("logout clicked")
        logout()
            .then(this.onLogoutButtonSuccess)
            .catch(this.onLogoutButtonError)
    };

    onLogoutButtonSuccess = (response) => {
        console.log({ logoutSuccess: response })
        toast.success("Logout Successful")
        this.props.history.push("/login")
    }
    onLogoutButtonError = (response) => {
        console.log({ logoutError: response })
    }



    render() {
        return (
            <React.Fragment>

                <NavBar />

                <div className="jumbotron" id="welcomeJumbo">
                    <h1 className="display-4">Welcome {this.state.formData.name}</h1>
                    <p className="lead">This is your welcome page.</p>
                    <hr className="my-4" />
                    <p>From here choose your path on the Navigation bar above to continue...</p>
                    <p className="lead">
                    </p>
                </div>

                <button
                    className="btn btn-danger ml-3"
                    onClick={this.onClickLogoutButton}
                    type="button"
                >Logout
                </button>

            </React.Fragment>
        )
    }

}
export default Welcome;



