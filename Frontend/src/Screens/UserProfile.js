
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Hourglass } from "react-spinners-css";
import { signout } from "../Actions/UserActions";
import MessageBox from "../componets/MessageBox";
import "./ScreenCSS/UserProfileScreen.css"

export default function ProfileScreen() {

    const userSignin = useSelector(state => state.userSignin); 
    const { userInfo,loading, error } = userSignin;
	const dispatch = useDispatch();

    const signoutHandler = () => {
        dispatch(signout());
      };


return(
    <React.Fragment>
		                  {loading ? (
        <Hourglass color="purple" />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="middlescreen">
<div class="card-container">
	<img class="round" src="http://images4.fanpop.com/image/photos/16100000/Mewtwo-mewtwo-is-the-best-16142096-300-350.jpg" alt="user" />
	<h3>{userInfo.name}</h3>
	<h5>{userInfo.gender}</h5>
    <h5>{userInfo.birthday}</h5>

	<p>Bio</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<Link to="/" onClick={signoutHandler}>

		<button class="primary ghost">
			Signout
		</button>
		</Link>

	</div>
	
    </div>

</div>
	        )}
 
</React.Fragment>

)
}