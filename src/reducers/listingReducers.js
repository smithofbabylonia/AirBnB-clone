export function listingListReducer(state ={listings :[]}, action){
    switch(action.type){
        case 'LISTING_LIST_REQUEST':
            return {loading: true, listings: []};
        case 'LISTING_LIST_SUCCESS':
            return {loading: false, listings: action.payload};
        case 'ERROR_LISTING_LIST':
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}