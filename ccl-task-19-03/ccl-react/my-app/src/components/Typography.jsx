import React from "react";

function Typography({ heading, paragraph, headingClass, paragraphClass }) {
  return (
    <div>
      {heading && <h1 className={headingClass}>{heading}</h1>}
      {paragraph && <p className={paragraphClass}>{paragraph}</p>}
    </div>
  );
}

export default Typography;