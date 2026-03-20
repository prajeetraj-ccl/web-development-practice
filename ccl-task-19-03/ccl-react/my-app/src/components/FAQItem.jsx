
import React from "react";

function FAQItem({ question, icon }) {
  return (
    <div className="faq-wrapper">
      <h1>{question}</h1>
      <div className="faq-arrow">
        <img src={icon} alt="arrow" />
      </div>
    </div>
  );
}

export default FAQItem;