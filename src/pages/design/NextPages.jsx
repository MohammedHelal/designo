import PropTypes from "prop-types";
import useScreenSize from "../../useHooks/useScreenSize";

import arrow from "../../assets/shared/desktop/icon-right-arrow.svg";
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
    <section className="xl:flex xl:justify-between w-full md:h-[640px] mb-32">
      {currentPage !== "web" && (
        <DesignPhoto
          img={screen > 768 ? web : screen > 426 ? webTablet : webMobile}
          title="WEB"
        />
      )}
      {currentPage !== "app" && (
        <DesignPhoto
          img={screen > 768 ? app : screen > 426 ? appTablet : appMobile}
          title="APP"
        />
      )}
      {currentPage !== "graphic" && (
        <DesignPhoto
          img={
            screen > 768
              ? graphic
              : screen > 426
              ? graphicTablet
              : graphicMobile
          }
          title="GRAPHIC"
        />
      )}
    </section>
  );
}

NextPages.propTypes = {
  currentPage: PropTypes.string.isRequired,
};

export default NextPages;

function DesignPhoto({ img, title }) {
  return (
    <div className="relative m-6 md:mx-0 xl:my-0">
      <img
        className="rounded-2xl h-[307px] md:h-full"
        src={img}
        alt="Web Design Photo"
      />
      <div className="bg-[#00000080] rounded-2xl absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center cursor-pointer hover:bg-[#e7826b80]">
        <div className="text-white text-center">
          <h2 className="my-6 text-3xl md:text-4xl">{title} DESIGN</h2>
          <p className="my-6 tracking-[5px]">
            VIEW PROJECTS{" "}
            <img
              src={arrow}
              className="inline-block mb-1 animate-pulse"
              alt="right pointing arrow"
            />
          </p>
        </div>
      </div>
    </div>
  );
}

DesignPhoto.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
