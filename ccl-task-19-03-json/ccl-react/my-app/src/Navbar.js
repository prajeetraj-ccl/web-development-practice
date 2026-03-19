function Navbar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
            <img src="/images/logo" alt="logo"/>
            </div>
            <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Service</a></li>
                  <li><a href="#">Resources</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#" className="button">Explore</a></li>
                <li><a href="#" className="button2">Learn →</a></li>
            </ul>
           </nav>

    );
}
export default Navbar;