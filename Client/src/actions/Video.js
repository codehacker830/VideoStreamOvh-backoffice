import {
    FETCH_ERROR,
    FETCH_START,
    FETCH_SUCCESS,
    VIDEO_LIST
} from "../constants/ActionTypes";
import axios from 'util/Api';

export const getVideos = () => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.get('/videos')
            .then(({ data }) => {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: VIDEO_LIST, payload: data.videos });
            })
            .catch(error => {
                dispatch({ type: FETCH_ERROR, payload: error.message });
            });
    }
};

export const deleteVideo = (id) => {
    return (dispatch) => {
        dispatch({ type: FETCH_START });
        axios.delete(`/video/${id}`)
            .then(({ data }) => {
                dispatch({ type: FETCH_SUCCESS });
                dispatch({ type: VIDEO_LIST, payload: data.videos });
            })
            .catch(error => {
                dispatch({ type: FETCH_ERROR, payload: error.message });
            });
    }
};