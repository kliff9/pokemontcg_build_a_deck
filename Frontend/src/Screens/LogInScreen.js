import { Link } from 'react-router-dom'
import './ScreenCSS/LoginScreen.css'
export default function LogInScreen() {

    return(
        <div class="login">
  <h1>Login</h1>
    <form method="post">
      <input type="text" name="u" placeholder="Username" required="required" />
        <input type="password" name="p" placeholder="Password" required="required" />
        <button type="submit" class="btn btn-primary btn-block btn-large">Log In</button>
        <Link to="/signup">Dont Have a Account? Sign Up</Link>

    </form>
</div>
    )
}