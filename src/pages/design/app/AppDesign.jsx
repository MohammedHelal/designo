import InnerLayout from "../../../layout/InnerLayout";
import Landing from "../Landing";
import DesignGrid from "../DesignGrid";
import NextPages from "../NextPages";
import { appGrid } from "../design-array";

function AppDesign() {
  return (
    <InnerLayout>
      <Landing
        title="App Design"
        para="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <DesignGrid grid={appGrid} />
      <NextPages currentPage="app" />
    </InnerLayout>
  );
}

export default AppDesign;
