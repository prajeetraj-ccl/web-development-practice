// import odepen from "../images/odepen.png";
// import ode from "../images/ode.png";
// import person from "../images/person.png";
// import cloud from "../images/cloud.png";
// import Typography from "./Typography";

// function Interface() {
//   return (
//     <div className="Interfaces-experience">

      
//       <div className="interface">
//          <Typography
//           heading="Interface and experience built for humans"
//           headingClass="interface-title"
//         />
//       </div>

      
//       <div className="interface-description">
//         <Typography
//           paragraph="We work with government and critical organisations throughout the UK to deliver digital transformation that puts you in control."
//           paragraphClass="interface-description"
//         />
//       </div>

      
//       <div className="interface-cards">

//         <div className="interface-card">
//            <img src={odepen} className="interface-icons" alt="" /> 
//           <h2 className="interface-card-title">Complex Enterprise</h2>
//           <p className="interface-card-description">
//             Scale globally without consultant lock-in. Build capability that compounds.
//           </p>
//         </div>

//         <div className="interface-card">
//           <img src={ode} className="interface-icons" alt="" />
//           <h2 className="interface-card-title">Complex Enterprise</h2>
//           <p className="interface-card-description">
//             Scale globally without consultant lock-in. Build capability that compounds.
//           </p>
//         </div>

//         <div className="interface-card">
//         <img src={person} className="interface-icons" alt="" />
//           <h2 className="interface-card-title">Complex Enterprise</h2>
//           <p className="interface-card-description">
//             Scale globally without consultant lock-in. Build capability that compounds.
//           </p>
//         </div>

//         <div className="interface-card">
//          <img src={cloud} className="interface-icons" alt="" />
//           <h2 className="interface-card-title">Complex Enterprise</h2>
//           <p className="interface-card-description">
//             Scale globally without consultant lock-in. Build capability that compounds.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Interface;
import React from "react";
import odepen from "../images/odepen.png";
import ode from "../images/ode.png";
import person from "../images/person.png";
import cloud from "../images/cloud.png";
import Typography from "./Typography";
import InterfaceCard from "./InterfaceCard";
import cardsData from "../data/interfacecards.json";

// Map icon names from JSON to imported images
const icons = { odepen, ode, person, cloud };

function Interface() {
  return (
    <div className="Interfaces-experience">
      <div className="interface">
        <Typography
          heading="Interface and experience built for humans"
          headingClass="interface-title"
        />
      </div>

      <div className="interface-description">
        <Typography
          paragraph="We work with government and critical organisations throughout the UK to deliver digital transformation that puts you in control."
          paragraphClass="interface-description"
        />
      </div>

      <div className="interface-cards">
        {cardsData.map((card, index) => (
          <InterfaceCard
            key={index}
            icon={icons[card.icon]}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Interface;
