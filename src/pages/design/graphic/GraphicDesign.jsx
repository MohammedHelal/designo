import InnerLayout from "../../../layout/InnerLayout";
import Landing from "../Landing";
import DesignGrid from "../DesignGrid";
import NextPages from "../NextPages";
import { graphicGrid } from "../design-array";

function GraphicDesign() {
  return (
    <InnerLayout>
      <Landing
        title="Graphic Design"
        para="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <DesignGrid grid={graphicGrid} />
      <NextPages currentPage="graphic" />
    </InnerLayout>
  );
}

export default GraphicDesign;
