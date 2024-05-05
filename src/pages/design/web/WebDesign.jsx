import Landing from "../../shared/Landing";
import DesignGrid from "../DesignGrid";
import NextPages from "../NextPages";
import { webGrid } from "../design-array";

function WebDesign() {
  const bg =
    "bg-[url('/src/assets/web-design/desktop/bg-pattern-intro-web.svg')]";
  return (
    <>
      <Landing
        className={`${bg} bg-[100%_10%]`}
        title="Web Design"
        para="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <DesignGrid grid={webGrid} />
      <NextPages currentPage="web" />
    </>
  );
}

export default WebDesign;
