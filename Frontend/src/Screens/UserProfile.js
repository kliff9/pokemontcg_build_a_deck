
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Hourglass } from "react-spinners-css";
import MessageBox from "../componets/MessageBox";
import "./ScreenCSS/UserProfileScreen.css"

export default function ProfileScreen() {

return(
    <React.Fragment>
        <div className="middlescreen">
<div class="card-container">
	<img class="round" src="http://images4.fanpop.com/image/photos/16100000/Mewtwo-mewtwo-is-the-best-16142096-300-350.jpg" alt="user" />
	<h3>Kliff Kliff</h3>
	<h5>Male</h5>
    <h5>birthday</h5>

	<p>Bio</p>
	<div class="buttons">
		<button class="primary">
			Message
		</button>
		<button class="primary ghost">
			Following
		</button>
	</div>
    </div>

</div>
</React.Fragment>

)
}