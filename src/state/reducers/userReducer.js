import {} from "../actions/userActions";

const initialState = {
    user: {},
    authToken: undefined,
    error: false
};

const reducer = (state = initialState, { type, payload }) => {
    const handlers = {
    // [REGISTER_USER_SUCCESS]: { ...state, user: payload }
    };
    return handlers[type] || state;
}

export default reducer;