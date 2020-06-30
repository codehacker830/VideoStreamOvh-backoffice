import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    CATEGORY_LIST
} from "../constants/ActionTypes";
import axios from 'util/Api';

export const getCategories = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/categories')
            .then(({ data }) => {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: CATEGORY_LIST, payload: data.categories });
            })
            .catch(error => {
                dispatch({ type: FETCH_ERROR, payload: error.message });
            });
    }
};

export const deleteCategory = (id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.delete(`/category/${id}`)
            .then(({ data }) => {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: CATEGORY_LIST, payload: data.categories });
            })
            .catch(error => {
                dispatch({ type: FETCH_ERROR, payload: error.message });
            });
    }
};