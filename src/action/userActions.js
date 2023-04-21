import axios from "axios";

export function login(email, password){
	return async function(dispatch){
		try {
			dispatch({type: "USER_LOGIN_REQUEST"});

			const config ={
				headers:{"Content-Type":"application/json"},
			};

			const {data} = await axios.post("http://localhost:5000/users", {email, password}, config);
			localStorage.setItem("userInfo", JSON.stringify(data));

			dispatch({type: "USER_LOGIN_SUCCESS", payload: data});

		} catch (error) {
			dispatch({type: "USER_LOGIN_FAIL", payload: error})
		}
	}
}

export function signup(email, password){
	return async function(dispatch){
		try {
			dispatch({type: "USER_REGISTER_REQUEST"});

			const config ={
				headers:{"Content-Type":"application/json"},
			};

			const {data} = await axios.post("http://localhost:5000/users", {email, password}, config);
			localStorage.setItem("userInfo", JSON.stringify(data));

			dispatch({type: "USER_LOGIN_SUCCESS", payload: data});

		} catch (error) {
			dispatch({type: "USER_LOGIN_FAIL", payload: error})
		}
	}
}

export function logout(){}