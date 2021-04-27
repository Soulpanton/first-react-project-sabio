import axios from "axios";

var userService = {
    endpoint: "https://api.remotebootcamp.dev/api/users"

}

const login = (payload) => {
    const config = {
        method: "POST",
        url: userService.endpoint + "/login",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)

}

const register = (payload) => {
    const config = {
        method: "POST",
        url: userService.endpoint + "/register",
        data: payload,
        crossdomain: true,
        headers: { "Content-Type": "application/json" }
    };
    return axios(config)
}

const logout = () => {
    const config = {
        method: "GET",
        url: userService.endpoint + "/logout",
        crossdomain: true
    };
    return axios(config)

}

const current = () => {
    const config = {
        method: "GET",
        url: userService.endpoint + "/current",
        crossdomain: true
    };
    return axios(config)
}

export {
    login,
    logout,
    current,
    register,
}






