import { VIDEO_LIST } from "../constants/ActionTypes";

const INIT_STATE = {
    videoList: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case VIDEO_LIST: {
            return {
                ...state,
                videoList: action.payload
            };
        }
        
        default:
            return state;
    }
}
