
export function userLoginReducer(state={}, action){
    switch (state.type) {
        case "USER_LOGIN_REQUEST":
            return{loading: true};
        case "USER_LOGIN_SUCCESS":
            return {loading: false, userInfo: action.payload};
        case "USER_LOGIN_FAIL":
            return {loading: false, error: action.payload};
        case "USER_LOGOUT":
            return;
        default:
            return state;
    }
}