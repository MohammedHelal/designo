import Landing from "../../shared/Landing";
import DesignGrid from "../DesignGrid";
import NextPages from "../NextPages";
import { appGrid } from "../design-array";

function AppDesign() {
  const bg =
    "bg-[url('/src/assets/web-design/desktop/bg-pattern-intro-web.svg')]";

  return (
    <>
      <Landing
        className={`${bg} bg-[100%_10%]`}
        title="App Design"
        para="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
      />
      <DesignGrid grid={appGrid} />
      <NextPages currentPage="app" />
    </>
  );
}

export default AppDesign;
