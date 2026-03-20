import Typography from "./Typography";
import Button from "./Button";
function DigitalTransformation() {
  return (
    <div className="digital-transformation"  >
      <div className="digital-transformation-content">

        <Typography
        heading="Digital Transformation Shouldn't Mean Digital Dependency"
        paragraph={`Modern businesses need infrastructure that grows without breaking.
        We deliver scalable software and DevOps solutions that handle your
        demands today and tomorrow.`}
        headingClass="digital-transformation-title"
        paragraphClass="digital-transformation-description"
        />
        <div className="digital-transformation-button">
          <button className="explore2">Explore</button>
          <button className="learn2">Learn →</button>
        </div>

      </div>
    </div>
  );
}

export default DigitalTransformation;