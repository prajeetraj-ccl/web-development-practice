import Typography from "./Typography";
function YourSearch() {
  return (
    <div className="your-search" >

      <div className="your-search-ends">
      <Typography
        heading="Your search ends here"
        headingClass="your-search-ends-title"
      />

      <Typography
        paragraph={`We create, deliver and maintain work across the globe around the clock.
        Our team is based in Manchester with collaborators across Europe, and we
        work worldwide with some of the most loved, desired and consumed brands.`}
        paragraphClass="your-search-ends-descriptions"
      />
      </div>

    </div>
  );
}

export default YourSearch;