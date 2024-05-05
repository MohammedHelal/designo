import { Link } from "react-router-dom";
import arrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import PropTypes from "prop-types";

function DesignPhoto({ design, img, title }) {
  return (
    <div
      className={`relative m-6 md:mx-0 xl:my-0 ${
        design && "md:h-auto xl:h-[307px] overflow-hidden"
      }`}
    >
      <img
        className="rounded-2xl h-[307px] md:h-auto"
        src={img}
        alt="Web Design Photo"
      />
      <Link to={`/${title}`}>
        <div className="bg-[#00000080] rounded-2xl absolute top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center cursor-pointer hover:bg-[#e7826b80]">
          <div className="text-white text-center">
            <h2 className="my-6 text-3xl md:text-4xl uppercase">
              {title} design
            </h2>
            <p className="my-6 tracking-[5px]">
              VIEW PROJECTS{" "}
              <img
                src={arrow}
                className="inline-block mb-1"
                alt="right pointing arrow"
              />
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

DesignPhoto.propTypes = {
  design: PropTypes.bool,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DesignPhoto;
