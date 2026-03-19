import logo from "../images/logo.png";
function BuildSystem() {
  return (
    <div className="build-system">
      <div className="build-system-wrapper" >

        
        <nav className="navbar">
          <div className="navbar-logo">
          <img src={logo} alt="logo" />
          </div>

          <ul className="navbar-menu">
            <li className="navbar__item">
              <a href="#" className="navbar__link">Home</a>
            </li>

            <li className="navbar__item">
              <a href="#" className="navbar__link">About</a>
            </li>

            <li className="navbar__item">
              <a href="#" className="navbar__link">Service</a>
            </li>

            <li className="navbar__item">
              <a href="#" className="navbar__link">Resources</a>
            </li>

            <li className="navbar__item">
              <a href="#" className="navbar__link">Contact</a>
            </li>

            <li className="navbar__item">
              <a href="#" className="button">Explore</a>
            </li>

            <li className="navbar__item">
              <a href="#" className="button2">Learn →</a>
            </li>
          </ul>
        </nav>

      
        <div className="build-system-wrapper-content">
          <h1 className="build-system-wrapper-title">
            Build systems that scale with you
          </h1>

          <p className="build-system-wrapper-descriptions">
            Modern businesses need infrastructure that grows without breaking.
            We deliver scalable software and DevOps solutions that handle your
            demands today and tomorrow.
          </p>

          <div className="build-system-wrapper-action">
            <a href="#" className="btn btn--primary">Explore</a>
            <a href="#" className="btn btn--secondary">Learn →</a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BuildSystem;