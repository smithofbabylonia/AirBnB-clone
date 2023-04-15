import { useEffect, useState } from "react";
import './Home.css';
import Card from "./Card";
import { listListing } from "../../action/listingActions";
import { useDispatch, useSelector } from "react-redux";

function Home(){
	//const [shroudDisplay, hidden] = useState(false);
	const dispatch = useDispatch();
	const listingList = useSelector(state => state.listingList);
	const {loading, error, listings} = listingList;

	useEffect(()=>{
		dispatch(listListing());
	},[dispatch]);

	return(
		<div className="home_body">
			<div className="modal"/>
			{loading ? <h3 className="loading">Loading...</h3> : error? <h3>{error.message}</h3> :
			<div className="cards">
				{listings.map(item => 
				<Card key={item.id} img={item.src} 
				title={item.name} 
				type={item.description} 
				date={item.date} price={item.price} rating={item.rating}/>)}
			</div>}
		</div>
	);
}

export default Home;