import React from "react";

function InterfaceCard({ icon, title, description }) {
  return (
    <div className="interface-card">
      <img src={icon} className="interface-icons" alt={title} />
      <h2 className="interface-card-title">{title}</h2>
      <p className="interface-card-description">{description}</p>
    </div>
  );
}

export default InterfaceCard;