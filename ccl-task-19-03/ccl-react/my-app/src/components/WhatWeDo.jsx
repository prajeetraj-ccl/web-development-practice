// function WhatWeDo() {
//   return (
//     <div className="what-we-do">

      
//       <div className="what-we-do-intro">
//         <h1 className="what-we-do-title">What we do</h1>

//         <p className="what-we-do-descriptiion">
//           We work with government and critical organization throughout the UK to deliver
//           digital transformation that puts you in control.
//         </p>
//       </div>

      
//       <div className="what-we-do__cards">

//         <div className="what-we-do__card">
//           <h1 className="what-we-do__card-title">Complex Enterprise</h1>
//           <p className="what-we-do__card-text">
//             Scale globally without consultant lock-in. Build capability that compounds.
//           </p>
//         </div>

//         <div className="what-we-do__card">
//           <h1 className="what-we-do__card-title">Critical Infrastructure</h1>
//           <p className="what-we-do__card-text">
//             Keep 24/7/365 operations in your control, safely and sustainably.
//           </p>
//         </div>

//         <div className="what-we-do__card">
//           <h1 className="what-we-do__card-title">Government Public Sector</h1>
//           <p className="what-we-do__card-text">
//             Protect taxpayer investment and build permanent civil service capability.
//           </p>
//         </div>

//         <div className="what-we-do__card">
//           <h1 className="what-we-do__card-title">Complex Enterprise</h1>
//           <p className="what-we-do__card-text">
//             Scale globally without consultant lock-in. Build capability that compounds.
//           </p>
//         </div>

//         <div className="what-we-do__card">
//           <h1 className="what-we-do__card-title">Complex Enterprise</h1>
//           <p className="what-we-do__card-text">
//             Scale globally without consultant lock-in. Build capability that compounds.
//           </p>
//         </div>

//         <div className="what-we-do__card">
//           <h1 className="what-we-do__card-title">Complex Enterprise</h1>
//           <p className="what-we-do__card-text">
//             Scale globally without consultant lock-in. Build capability that compounds.
//           </p>
//         </div>

//       </div>

    
//       <div className="buttons">
//         <button className="explore11">Explore</button>
//         <button className="learn1">Learn →</button>
//       </div>

//     </div>
//   );
// }

// export default WhatWeDo;
import SectionHeader from "./SectionHeader";
import WedoCardList from "./wedoCardList";
import Wedobutton from "./wedobutton"

function WhatWeDo() {
  return (
    <div className="what-we-do">

      <SectionHeader />

      <WedoCardList />

      <Wedobutton />

    </div>
  );
}

export default WhatWeDo;