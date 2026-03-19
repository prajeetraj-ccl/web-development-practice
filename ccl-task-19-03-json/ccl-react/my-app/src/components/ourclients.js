import nice from "../images/nice.png";

function OurClients() {
  return (
    <div className="ourclients">

      <div className="ourclient-header">
        <h1 className="ourclient-title">Our Clients</h1>
        <div className="ourclient-divider"></div>
      </div>

      <div className="ourclient-icon">
        <img src={nice} alt="client" />
      </div>

    </div>
  );
}

export default OurClients;