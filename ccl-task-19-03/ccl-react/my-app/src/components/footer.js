import logo from "../images/logo.png";
import g1 from "../images/group-5.png";
import g2 from "../images/group-2.png";
import g3 from "../images/group-3.png";
import g4 from "../images/group-4.png";




function Footer() {
  return (
    <>
     
      <div className="footer">

        
        <div className="footer-left">
          <img src={logo}  className="footer-logo" alt="logo" />
        </div>

        
        <div className="footer-cards">
          <h1 className="footer-cards-title">Links</h1>
          <ul className="footer-cards-menu">
            <li>Home</li>
            <li>Services</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

       
        <div className="footer-cards">
          <h1 className="footer-cards-title">Support</h1>
          <ul className="footer-cards-menu">
            <li>FAQ</li>
            <li>Rules</li>
            <li>Training</li>
            <li>Sponsorship</li>
            <li>Media</li>
          </ul>
        </div>

      
        <div className="footercards">
          <div className="footer-cards-3">
            <h1 className="footer-cards-title">Crystal Code Labs</h1>

            <ul className="footer-cards-menu">
              <li>No.4, 2nd Floor,</li>
              <li>Santhosh Complex,</li>
              <li>Aishwarya Nagar,</li>
              <li>Udumalaipettai</li>
              <li>642126</li>
            </ul>

        
            <div className="footer-icon">
              <a href="#"><img src={g1} alt="icon" /></a>
              <a href="#"><img src={g2} alt="icon" /></a>
              <a href="#"><img src={g3} alt="icon" /></a>
              <a href="#"><img src={g4} alt="icon" /></a>
            </div>
          </div>
        </div>

      </div>

    
      <div className="footer-line"></div>

      
      <div className="footer-base">
        <ul className="footer-base-title">
          <li>&copy;</li>
          <li>Crystalcodelabs 2026</li>
          <li>Privacy Policy</li>
          <li>Cookies Settings</li>
          <li>Terms</li>
        </ul>
      </div>
    </>
  );
}

export default Footer;