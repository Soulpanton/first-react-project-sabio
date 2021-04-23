// import Axios from "axios";
import React, { Component } from "react";
// import Axios from "axios";
import * as userService from "../services/userService";


class Jumbo extends Component {
    // const payload = {
    //     "email": "soulpanton@reficul.com",
    //     "password": "Reficul656!@sabio",
    //     "tenantId": "bootcamp1"
    // };
    // userService = {
    //     endpoint: "https://api.remotebootcamp.dev/api/users",
    //     payload: {
    //         "email": "soulpanton@reficul.com",
    //         "password": "Reficul656!@sabio",
    //         "tenantId": "bootcamp1"
    //     },
    // }
    // config = {
    //     method: "POST",
    //     url: `${this.userService.endpoint}/login`,
    //     data: this.userService.payload,
    //     crossdomain: true,
    //     headers: { "Content-Type": "application/json" }
    // }

    // componentDidMount() {
    //     console.log("ComponeneDidMount is executing");
    //     return Axios(this.config)
    //         .then(function (data) {
    //             console.log("data from success: ", data)
    //         })
    //         .catch(function (data) {
    //             console.warn("data from error: ", data)
    //         })
    // }


    consoleButtonClick = () => {
        console.log("console button was clicked", new Date())
        const data = {
            "email": "soulpanton@reficul.com",
            "password": "Reficul656!@sabio",
            "tenantId": "bootcamp1"
        };

        userService.logIn(data)
            .then(this.onActionSuccess)
            .catch(this.onActionError);
    };

    onActionSuccess = (response) => {
        console.log({ onActionSuccessLogin: response.data })
    }

    onActionError = (response) => {
        console.warn({ onActionError: response })
    }

    componentDidMount() {
        console.log("componentDidMount is executing")
        const data = {
            "email": "soulpanton@reficul.com",
            "password": "Reficul656!@sabio",
            "tenantId": "bootcamp1"
        };

        userService.logIn(data)
            .then(this.onActionSuccess)
            .catch(this.onActionError);

    }


    render() {
        return (

            <div className="combine">

                <div className="jumbotron">
                    <div className="container">
                        <h1 className="display-3">Hello, world!</h1>
                        <p>
                            This is a template for a simple marketing or informational
                            website. It includes a large callout called a jumbotron and
                            three supporting pieces of content. Use it as a starting point
                            to create something more unique.
                        </p>
                        <p>
                            <button className="btn btn-primary btn-lg">
                                Learn more &raquo;
                            </button>

                            <button type="button" className="btn btn-outline-warning ml-2"
                                onClick={this.consoleButtonClick}>
                                Login/Console
                            </button>

                        </p>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Fusce
                                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                                nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                                malesuada magna mollis euismod. Donec sed odio dui.
                            </p>
                            <p>
                                <button className="btn btn-secondary">
                                    View details &raquo;
                                </button>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Fusce
                                dapibus, tellus ac cursus commodo, tortor mauris condimentum
                                nibh, ut fermentum massa justo sit amet risus. Etiam porta sem
                                malesuada magna mollis euismod. Donec sed odio dui.
                            </p>
                            <p>
                                <button className="btn btn-secondary">
                                    View details &raquo;
                                </button>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h2>Heading</h2>
                            <p>
                                Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
                                egestas eget quam. Vestibulum id ligula porta felis euismod
                                semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris
                                condimentum nibh, ut fermentum massa justo sit amet risus.
                            </p>
                            <p>
                                <button className="btn btn-secondary">
                                    View details &raquo;
                                </button>
                            </p>
                        </div>
                    </div>


                </div>
            </div>


        )
    }
}

export default Jumbo;