import { CATEGORY_LIST } from "../constants/ActionTypes";

const INIT_STATE = {
    categoryList: []
};

export default (state = INIT_STATE, action) => {
    switch (action.type) {

        case CATEGORY_LIST: {
            return {
                ...state,
                categoryList: action.payload
            };
        }
        
        default:
            return state;
    }
}
