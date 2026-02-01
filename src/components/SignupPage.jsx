import { Link } from "react-router-dom";
import { FaFacebookSquare } from "react-icons/fa";
import "../style.css";
import Footer from './Footer'
function SignupPage() {
  return (
    <div className="container">
      <div className="signup-card">

        <img src="/insta4.png" alt="Instagram" className="logo" />

        <p className="signup-subtitle">
          Sign up to see photos and videos from your friends.
        </p>

        <div className="fb-signup">
          <FaFacebookSquare /> Log in with Facebook
        </div>

        <div className="divider"><span>OR</span></div>
        <div className="input-btn">
          <input type="text" placeholder="Mobile number or email" />
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
        </div>

        <button className="signup-btn">Sign up</button>

        <p className="terms">
          By signing up, you agree to our Terms, Privacy Policy and Cookies Policy.
        </p>

        {/* <div className="signup-box">
            Have an account? <Link to="/login">Login</Link>
          </div> */}

        {/* GET APP */}
        <div className="get-app">
        </div>
      </div>
      <div className="signup-box">
        Have an account? <Link to="/">Login</Link>
      </div>

      <Footer />
    </div>
  );
}

export default SignupPage;