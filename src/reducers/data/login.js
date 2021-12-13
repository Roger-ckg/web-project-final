
const login = (state = false, action) => {
    switch (action.type) {
        case "logged-in":
            state = true;
            return(state);
        default:
            return(state);
    }
}

export default login;