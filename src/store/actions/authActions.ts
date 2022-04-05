import axios from "../../services/axios";

export const signUp = (name: any,
    surname: any,
    email: any,
    password: any) => {
    return (dispatch: any) => {
        axios
            .post("/auth/sign-up", {
                name,
                surname,
                email,
                password,
            })
            .then(({ data }) => {
                // Sign In
                dispatch(signIn(email, password));
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const signIn = (email: any, password: any) => {
    return (dispatch: any) => {
        axios
            .post("/auth/sign-in", {
                email: email,
                password: password,
            })
            .then(({ data }) => {
                localStorage.setItem("authToken", data.payload.token);

                dispatch({
                    type: "SIGN_IN",
                    payload: data.payload,
                });
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
};

export const signOut = () => {
    return (dispatch: any) => {
        dispatch({
            type: "SIGN_OUT",
        });
    };
};

export const loadUser = () => {
    return (dispatch: any, getState: any) => {
        const token = getState().auth.authToken;
        if (token) {
            axios
                .get("/auth/check-token", {
                    headers: { Authorization: `Bearer ${token}` },
                })
                .then(({ data }) => {
                    dispatch({
                        type: "LOAD_USER",
                        payload: data.payload,
                    });
                })
                .catch((error) => {
                    console.log(error.response);
                });
        } else return null;
    };
};

