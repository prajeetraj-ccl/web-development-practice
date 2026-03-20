import logo from "../images/logo.png";
import Typography from "./Typography";
import Button from "./Button";
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
          {/* <h1 className="build-system-wrapper-title">
            Build systems that scale with you
          </h1>

          <p className="build-system-wrapper-descriptions">
            Modern businesses need infrastructure that grows without breaking.
            We deliver scalable software and DevOps solutions that handle your
            demands today and tomorrow.
          </p> */}
           <Typography
             heading="Build systems that scale with you"
             paragraph={`Modern businesses need infrastructure that grows without breaking.
             We deliver scalable software and DevOps solutions that handle your
             demands today and tomorrow.`}
             headingClass="build-system-wrapper-title"
            paragraphClass="build-system-wrapper-descriptions"
/>

          <div className="build-system-wrapper-action">
             <Button text="Explore" className="btn btn--primary" />
             <Button text="Learn →" className="btn btn--secondary" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default BuildSystem;