import Landing from "../../shared/Landing";
import DesignGrid from "../DesignGrid";
import NextPages from "../NextPages";
import { graphicGrid } from "../design-array";

function GraphicDesign() {
  const bg =
    "bg-[url('/src/assets/web-design/desktop/bg-pattern-intro-web.svg')]";
  return (
    <>
      <Landing
        className={`${bg} bg-[100%_10%]`}
        title="Graphic Design"
        para="We deliver eye-catching branding materials that are tailored to meet your business objectives."
      />
      <DesignGrid grid={graphicGrid} />
      <NextPages currentPage="graphic" />
    </>
  );
}

export default GraphicDesign;
