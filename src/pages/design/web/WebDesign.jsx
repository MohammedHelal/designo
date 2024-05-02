import InnerLayout from "../../../layout/InnerLayout";
import Landing from "../Landing";
import DesignGrid from "../DesignGrid";
import NextPages from "../NextPages";
import { webGrid } from "../design-array";

function WebDesign() {
  return (
    <InnerLayout>
      <Landing
        title="Web Design"
        para="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <DesignGrid grid={webGrid} />
      <NextPages currentPage="web" />
    </InnerLayout>
  );
}

export default WebDesign;
