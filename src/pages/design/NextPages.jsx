import PropTypes from "prop-types";
import useScreenSize from "../../useHooks/useScreenSize";
import DesignPhoto from "../shared/DesignPhoto";
import web from "../../assets/home/desktop/image-web-design-large.jpg";
import webTablet from "../../assets/home/tablet/image-web-design.jpg";
import webMobile from "../../assets/home/mobile/image-web-design.jpg";
import app from "../../assets/home/desktop/image-app-design.jpg";
import appTablet from "../../assets/home/tablet/image-app-design.jpg";
import appMobile from "../../assets/home/mobile/image-app-design.jpg";
import graphic from "../../assets/home/desktop/image-graphic-design.jpg";
import graphicTablet from "../../assets/home/tablet/image-graphic-design.jpg";
import graphicMobile from "../../assets/home/mobile/image-graphic-design.jpg";

function NextPages({ currentPage }) {
  const screen = useScreenSize().width;

  return (
    <section className="xl:flex xl:justify-between w-full mb-8">
      {currentPage !== "web" && (
        <DesignPhoto
          design
          img={screen > 768 ? web : screen > 426 ? webTablet : webMobile}
          title="web"
        />
      )}
      {currentPage !== "app" && (
        <DesignPhoto
          design
          img={screen > 768 ? app : screen > 426 ? appTablet : appMobile}
          title="app"
        />
      )}
      {currentPage !== "graphic" && (
        <DesignPhoto
          design
          img={
            screen > 768
              ? graphic
              : screen > 426
              ? graphicTablet
              : graphicMobile
          }
          title="graphic"
        />
      )}
    </section>
  );
}

NextPages.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default NextPages;
