import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import Footer from "./Footer"
import "../style.css";

function LoginPage() {
  return (
    <div className="container">
      <div className="content">

        {/* LEFT IMAGE */}
        <div className="phone-img">
          <img src="/mockup3.png" alt="phone preview" />
        </div>

        {/* RIGHT SIDE */}
        <div>
          <div className="login-box">
            <img src="/insta4.png" alt="Instagram" className="logo" />

            <input type="text" placeholder="Phone number, username, or email" />
            <input type="password" placeholder="Password" />
            <button className="login-btn">Log in</button>

            <div className="divider"><span>OR</span></div>

            <div className="fb-login">
              <FaFacebookSquare /> Log in with Facebook
            </div>

            <div className="forgot">Forgot password?</div>
          </div>

          <div className="signup-box">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>

          {/* GET APP SECTION */}
          <div className="get-app">
            <p>Get the app.</p>
            <div className="store-buttons">
              <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"
              alt="Get it on Google Play"
              className="h-10"
            />
                <img
              src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"
              alt="Get it from Microsoft"
              className="h-10"
            />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default LoginPage;