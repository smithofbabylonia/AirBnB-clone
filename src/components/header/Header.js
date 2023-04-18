import React from "react";
import SearchBar from "./SearchBar";
import './Header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faGlobe, faUser } from "@fortawesome/free-solid-svg-icons";
import Shroud from "./Shroud";
import { openModal } from "../../action/modalActions";
import { useDispatch, useSelector } from "react-redux";
import Account from "../account/Account";

function Header(){

	const diaspatch = useDispatch();
	const userLogin = useSelector(state => state.userLogin);
	const {userLoginInfo} = userLogin;

	function openModalHandle(event,log){
		//console.log(event.target,log);
		if(log==="log"){
			diaspatch(openModal("open",<Account/>));	
		}else{
			diaspatch(openModal("open",<Shroud/>));
		}
	}
	return(
		<header className="header flex">
			<img className="logo" src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png" alt="AirBnB"/>
			<SearchBar func={openModalHandle}/>
			<div className="home flex">
				<h6>Airbnb your home</h6>
				<FontAwesomeIcon icon={faGlobe}/>
				<div className="account rounded flex">
					<FontAwesomeIcon icon={faBars}/>
					<FontAwesomeIcon icon={faUser}/>
				</div>
					<ul className="dd-menu">
						{userLoginInfo? <><li>Account</li><li>Logout</li></>:<><li>Sign up</li><li onClick={e =>openModalHandle(e,"log")}>Log in</li></>}
						<li id="break"></li>
						<li>Airbnb your home</li>
						<li>Help</li>
					</ul>
			</div>
			{/*<Shroud/>*/}
		</header>
	);
}

export default Header;