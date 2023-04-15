import axios from "axios";

export const listListing = ()=> async(dispatch) =>{
	try{
		dispatch({type : 'LISTING_LIST_REQUEST'});
		const {data} = await axios.get('http://localhost:5000/listings');
		dispatch({type: 'LISTING_LIST_SUCCESS', payload: data});
	}catch(error){
		dispatch({type: 'ERROR_LISTING_LIST', payload: error});
	}
};