import { useState } from "react";
import { } from "react-redux";
//import { login, signup } from "../actions/authActions";
import './Account.css';

/*
If this code looks familiar or doesn't match my style, that is because I asked GPT to generate a login/signup page for me,
I wasn't about to type all this code,
I just added and adjusted the connectors so it can be compatiable with the rest of the app.
*/

function Account(props) {// The props are login stuff but will be replaced with redux 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  function handleInputChange(event) {//Not neccesary, can be put within the elements
    const target = event.target;
    const name = target.name;
    const value = target.value;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isLogin) {
      props.login(email, password);
    } else {
      props.signup(email, password);
    }
  }

  function toggleForm() {
    setIsLogin(!isLogin);
  }

  return (
    <div className="account-container">
      <form onSubmit={handleSubmit}>
        <h2>{isLogin ? "Log in" : "Sign up"}</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isLogin ? "Log in" : "Sign up"}
        </button>
        <div className="form-toggle">
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={toggleForm}>
                Sign up
              </a>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <a href="#" onClick={toggleForm}>
                Log in
              </a>
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default Account;
