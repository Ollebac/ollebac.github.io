import './Nav.css'


function NavBar() {
    return (
        <nav className='nav-bar'>
            {/* <img src='/black-square.png' id="nav-logo" className="rotate" alt="logo"/> */}
            <a className="nav-link" href="/"> Home </a>
            <a className="nav-link" href="/About"> About </a>
            <a className="nav-link" href="/Projects"> Projects </a>
            <a className="nav-link" href="/Work"> Work </a>
            <a className="nav-link" href="/Contact"> Contact </a>
            {/* <a className="nav-link" href="https://oldschool.runescape.com" target="_blank" rel="noopener noreferrer"> Contact Me </a>
            <a className="nav-link" href="google.com" target="_blank" rel="noopener noreferrer"> Download CV </a> */}
        </nav>
    );
}



export default NavBar;