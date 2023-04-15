
function Card({img, title, type, date, price, rating}){
	return(
		<div className="card">
			<img src={img} alt="Views"/>
			<div>
				<h5>{title}</h5>
				<h5>{rating}</h5>
			</div>
			<h5>{type}</h5>
			<h5>{date}</h5>
			<h5>R{price} ZAR</h5>
		</div>
	);
}


export default Card;