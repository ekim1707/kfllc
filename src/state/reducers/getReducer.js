import {
    GET_ADMIN_DATA_SUCCESS
} from "../actions/getActions";

const initialState = {
    error: false
};

const reducer = (state = initialState, { type, payload }) => {
    const handlers = {
        [GET_ADMIN_DATA_SUCCESS]: { ...state, data: payload }
    };
    return handlers[type] || state;
};

export default reducer;