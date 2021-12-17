import React, { useEffect, useState } from "react";
import "./ScreenCSS/LoginScreen.css";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  { useSelector } from 'react-redux';
import MessageBox from "../componets/MessageBox";
import { Hourglass } from "react-spinners-css";
import { signin } from "../Actions/UserActions";

export default function LogInScreen(P) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const usernameChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const userSignin = useSelector(state => state.userSignin); 
  
  const { userInfo, loading, error } = userSignin;



  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password)); 
}

useEffect(() => {
  if (userInfo) {
    navigate(redirect);
    
  }
}, [navigate, redirect, userInfo]);

  return (
    <div class="login">
      <h1>Login</h1>
      <form method="post" onSubmit={submitHandler}>
        <input
          type="text"
          name="u"
          placeholder="Username"
          required="required"
          onChange={usernameChangeHandler}
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
          onChange={passwordChangeHandler}

        />
        <button type="submit" class="btn btn-primary btn-block btn-large">
          Log In
        </button>
        <Link to="/signup">Dont Have a Account? Sign Up</Link>
      </form>
      {loading && <Hourglass></Hourglass>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
    </div>
    
  );
}
