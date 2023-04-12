import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SearchBar(){

	return(
		<div className="searchbar rounded flex">
			<h6>Anywhere</h6>
			<h6>|</h6>
			<h6>Any week</h6>
			<h6>|</h6>
			<h6>Add guests</h6>
			<FontAwesomeIcon icon={faSearch} />
		</div>
	)
}

export default SearchBar;