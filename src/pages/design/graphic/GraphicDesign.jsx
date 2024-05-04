import Landing from "../Landing";
import DesignGrid from "../DesignGrid";
import NextPages from "../NextPages";
import { graphicGrid } from "../design-array";

function GraphicDesign() {
  return (
    <>
      <Landing
        title="Graphic Design"
        para="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <DesignGrid grid={graphicGrid} />
      <NextPages currentPage="graphic" />
    </>
  );
}

export default GraphicDesign;
