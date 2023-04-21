import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signup } from "../../action/userActions";
import './Account.css';
import { openModal } from "../../action/modalActions";
//import { useHistory } from "react-router-dom";

/*
If this code looks familiar or doesn't match my style, that is because I asked GPT to generate a login/signup page for me,
I wasn't about to type all this code,
I just added and adjusted the connectors so it can be compatiable with the rest of the app.
*/

function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailValid, setEmailValid] = useState(true);
  const dispatch = useDispatch();
  const userLogin =useSelector(state => state.userLogin);
  const {loading, error, userInfo}=userLogin;

  	useEffect(()=>{
		if(userInfo) dispatch(openModal("close",""));
	},[userInfo]);


function handleContinueClick() {
	  setEmailValid(validateEmail(email));
    if (validateEmail(email)) {
      setShowPassword(true);
    }
  }

  function handleLoginClick() {
    dispatch(login(email, password));
  }

  function validateEmail(email) {
    // Simple regex check for email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  return (
    <div className="account-container">
      <h2>Login Page</h2>
      
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} 
		className="form-control" placeholder="email" name="email"/>
        {!emailValid && (
          <p style={{ color: 'red' }}>Please enter a valid email address</p>
        )}
		{loading ? <p>Signin you in</p> : error? (
          <p style={{ color: 'red' }}>Please check your credentials and try again</p>
        ) : <p>.</p>}
        {showPassword && (
          <>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              value={password} name="password"
              onChange={e => setPassword(e.target.value)} className="form-control"
            />
          </>
        )}
        <input id="loadbutton" type="button" onClick={showPassword ? handleLoginClick : handleContinueClick}
          value={showPassword ? 'Login' : 'Continue'}
        />
      </div>
	  <div className="form-group">
        <input type="button" disabled value="Google"/>
        <input type="button" disabled value="Facebook"/>
        <input type="button" disabled value="Twitter"/>
      </div>
    </div>
  );
}

export default Account;
