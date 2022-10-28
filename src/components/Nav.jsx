import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className='nav_container'>
            <div class="nav_content">
                <Link className="left_nav_link" to="/"> Home </Link>
                <Link className="left_nav_link" to="/About"> About </Link>
                <Link className="left_nav_link" to="/Projects"> Projects </Link>
            </div>
            <div class="nav_content">
                <a className="right_nav_link" href="Cabello_CV.pdf" download> Download CV </a>
                <a className="right_nav_link" href="mailto:me@ollebac.dev"> Contact </a>
            </div>
        </nav>
    );
}

export default Navbar;