import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    INIT_URL,
    SIGNOUT_USER_SUCCESS,
    USER_DATA,
    USER_TOKEN_SET
} from "../constants/ActionTypes";
import axios from 'util/Api'

export const setInitUrl = (url) => {
    return {
        type: INIT_URL,
        payload: url
    };
};

export const userSignUp = ({ name, email, password }) => {
    console.log(name, email, password);
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.post('/register', {
            email: email,
            name: name,
            password: password,
            password_confirm: password,
        }
        ).then(({ data }) => {
            localStorage.setItem("token", JSON.stringify(data.token));
            axios.defaults.headers.common['Authorization'] = "Bearer " + data.token;
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: USER_TOKEN_SET, payload: data.token });
            dispatch({ type: USER_DATA, payload: data.user });
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            console.log("Error****:", error.message);
        });
    }
};

export const userSignIn = ({ email, password }) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.post('/admin/login', {
            email: email,
            password: password,
        }
        ).then(({ data }) => {
            localStorage.setItem("token", JSON.stringify(data.token));
            axios.defaults.headers.common['Authorization'] = "Bearer " + data.token;
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: USER_TOKEN_SET, payload: data.token });

        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            console.log("Error****:", error.message);
        });
    }
};

export const getUser = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/me',
        ).then(({ data }) => {
            console.log("userSignIn: ", data);
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: USER_DATA, payload: data.user });
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            dispatch({ type: SIGNOUT_USER_SUCCESS });
            console.log("Error****:", error.message);
        });
    }
};


export const userSignOut = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/logout',
        ).then(({ data }) => {
            dispatch({ type: FETCH_SUCCESS });
            localStorage.removeItem("token");
            dispatch({ type: FETCH_SUCCESS });
            dispatch({ type: SIGNOUT_USER_SUCCESS });
        }).catch(function (error) {
            dispatch({ type: FETCH_ERROR, payload: error.message });
            console.log("Error****:", error.message);
        });
    }
};
