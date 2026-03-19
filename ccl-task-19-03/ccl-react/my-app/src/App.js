import NavbarHero from "./components/build-system";
import WhatWeDo from "./components/WhatWeDo";
import DigitalTransformation from "./components/digitaltransformation";
import Interface from "./components/Interface";
import Global from "./components/global";
import OurClients from "./components/ourclients";
import FAQ from "./components/faq";
import YourSearch from "./components/yoursearch";
import Footer from "./components/footer";

import "./App.css";
import BuildSystem from "./components/build-system";

function App() {
  return (
    <div className="container">

      <BuildSystem />
      <WhatWeDo />
      <DigitalTransformation />
      <Interface />
      <Global />
      <OurClients />
      <FAQ />
      <YourSearch />
      <Footer />

    </div>
  );
}

export default App;

