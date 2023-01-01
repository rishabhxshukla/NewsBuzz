import "../Styles/App.css";
import "../Styles/Navbar.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";

function Navbar() 
{
  return (
    <>
        <nav className="NavbarContainer">
            
            <img src={logo} alt="Logo" id="logo" />

            <div className="categories">
                <Link to={"/"}>Home</Link>
                <Link to={"/sports"}>Sports</Link>
                <Link to={"/entertainment"}>Entertainment</Link>
                <Link to={"/science"}>Science</Link>
                <Link to={"/business"}>Business</Link>
                <Link to={"/technology"}>Technology</Link>
            </div>

            <div className="buttons">
                <a href="#"><button>Contact Us</button></a>
                <a href="#"><button>Sign Up</button></a>
            </div>
        </nav>
    </>
  );
}

export default Navbar