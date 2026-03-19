import globe from "../images/globe.png";
function Global() {
  return (
    <div className="global">

     
      <div className="global-left">
        <h1 className="global-title">
          Intersecting culture & technology around the world
        </h1>

        <p className="global-description">
          We create, deliver and maintain work across the globe, around the clock.
          Our team is based in Manchester with collaborators across Europe,
          and we work worldwide with some of the most loved, desired and consumed brands.
        </p>

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