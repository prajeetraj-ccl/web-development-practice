import globe from "../images/globe.png";
import Typography from "./Typography";
function Global() {
  return (
    <div className="global">

     
      <div className="global-left">
             <Typography
        heading="Intersecting culture & technology around the world"
        headingClass="global-title"
      />

      <Typography
        paragraph={`We create, deliver and maintain work across the globe, around the clock.
        Our team is based in Manchester with collaborators across Europe,
        and we work worldwide with some of the most loved, desired and consumed brands.`}
        paragraphClass="global-description"
      />

        <div className="global-buttons">
          <button className="explore3">Explore</button>
          <button className="learn3">Learn →</button>
        </div>
      </div>

     
      <div className="global-right">
       <img src={globe} className="global-icon" alt="globe" />
      </div>

    </div>
  );
}

export default Global;