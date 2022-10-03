import './Nav.css';

function Navbar() {
    return (
        <nav className='nav-bar'>
            <div class="main_nav">
                <a href="/" className="nav-link"> Home </a>
                <a href="/About" className="nav-link"> About </a>
                <a href="/Projects" className="nav-link"> Projects </a>
                <a href="/Work" className="nav-link"> Work </a>
            </div>
            <div class="main_nav">
                <a className="nav-link" href="/Contact"> Contact </a>
            </div>
        </nav>
    );
}

export default Navbar;