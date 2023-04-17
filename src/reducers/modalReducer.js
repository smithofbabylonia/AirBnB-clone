
const initialState = {openClose: "close", content: ""}

export function modalReducer(state = initialState, action){
    switch (action.type) {
        case "OPEN_MODAL":
            return action.payload;
    
        default:
            return state;
    }
}