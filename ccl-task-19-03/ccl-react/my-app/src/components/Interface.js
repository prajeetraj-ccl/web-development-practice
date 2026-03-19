import odepen from "../images/odepen.png";
import ode from "../images/ode.png";
import person from "../images/person.png";
import cloud from "../images/cloud.png";

function Interface() {
  return (
    <div className="Interfaces-experience">

      
      <div className="interface">
        <h1 className="interface-title">
          Interface and experience built for humans
        </h1>
      </div>

      
      <div className="interface-description">
        <p>
          We work with government and critical organisations throughout the UK
          to deliver digital transformation that puts you in control.
        </p>
      </div>

      
      <div className="interface-cards">

        <div className="interface-card">
           <img src={odepen} className="interface-icons" alt="" /> 
          <h2 className="interface-card-title">Complex Enterprise</h2>
          <p className="interface-card-description">
            Scale globally without consultant lock-in. Build capability that compounds.
          </p>
        </div>

        <div className="interface-card">
          <img src={ode} className="interface-icons" alt="" />
          <h2 className="interface-card-title">Complex Enterprise</h2>
          <p className="interface-card-description">
            Scale globally without consultant lock-in. Build capability that compounds.
          </p>
        </div>

        <div className="interface-card">
        <img src={person} className="interface-icons" alt="" />
          <h2 className="interface-card-title">Complex Enterprise</h2>
          <p className="interface-card-description">
            Scale globally without consultant lock-in. Build capability that compounds.
          </p>
        </div>

        <div className="interface-card">
         <img src={cloud} className="interface-icons" alt="" />
          <h2 className="interface-card-title">Complex Enterprise</h2>
          <p className="interface-card-description">
            Scale globally without consultant lock-in. Build capability that compounds.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Interface;