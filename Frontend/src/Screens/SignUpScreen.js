import { Link } from 'react-router-dom'
import './ScreenCSS/LoginScreen.css'
export default function SignUpScreen() {

    return(
        <div class="login">
  <h1>Signup</h1>
    <form method="post">
      <input type="text" name="u" placeholder="First Name" required="required" />
        <input type="text" name="p" placeholder="Last Name" required="required" />
        <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <input type="text" name="p" placeholder="Favorite Pokemon" required="required" />


        <button type="submit" class="btn btn-primary btn-block btn-large">Sign Up</button>
    </form>

</div>
    )
}