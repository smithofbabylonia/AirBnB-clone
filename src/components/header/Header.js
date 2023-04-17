import React from "react";
import SearchBar from "./SearchBar";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import Shroud from "./Shroud";
import { openModal } from "../../action/modalActions";
import { useDispatch } from "react-redux";

function Header(){

	const diaspatch = useDispatch();

	function openModalHandle(){
		console.log("Logging in");
		diaspatch(openModal("open","login"));
	}
	return(
		<header className="header flex">
			<img className="logo" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="AirBnB"/>
			<SearchBar/>
			<div className="home flex">
				<h6>Airbnb your home</h6>
				<FontAwesomeIcon icon={faGlobe}/>
				<div className="account rounded flex" onClick={openModalHandle}>
					<FontAwesomeIcon icon={faBars}/>
					<FontAwesomeIcon icon={faUser}/>
				</div>
			</div>
			<Shroud/>
		</header>
	);
}

export default Header;