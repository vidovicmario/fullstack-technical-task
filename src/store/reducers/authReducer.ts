

const initialState = {
    "authToken": localStorage.getItem("authToken"),
    "user": null
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...initialState,
                authToken: action.payload.token,
                user: action.payload.user,
            };
        case "SIGN_OUT":
            localStorage.removeItem("authToken");
            return initialState;
        case "LOAD_USER":
            return {
                ...initialState,
                user: action.payload,
            };
        default:
            return state;
    }
}

export default authReducer;