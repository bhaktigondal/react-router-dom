
import "./Navbar.css"

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-container">
        <Link to="/" className="nav-menu">Home</Link>
        <Link to="/About" className="nav-menu">About</Link>
        <Link to="/Contact" className="nav-menu">Contact</Link>
    </div>
  )
}

export default Navbar