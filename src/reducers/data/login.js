import data from "./loggedin.json";
const login = (state = data, action) => {
    switch (action.type) {
        case "logged-in":
            state = {
                "logged-in": true,
                "username": action.username
            };
            return(state);
        default:
            return(state);
    }
}

export default login;