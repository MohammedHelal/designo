import PropTypes from "prop-types";
import useScreenSize from "../../useHooks/useScreenSize";
import { Link } from "react-router-dom";

import hero from "../../assets/home/desktop/bg-pattern-hero-home.svg";
import arrow from "../../assets/shared/desktop/icon-right-arrow.svg";
import passionate from "../../assets/home/desktop/illustration-passionate.svg";
import resourceful from "../../assets/home/desktop/illustration-resourceful.svg";
import friendly from "../../assets/home/desktop/illustration-friendly.svg";
import leaf from "../../assets/shared/desktop/bg-pattern-leaf.svg";
import phone from "../../assets/home/desktop/image-hero-phone.png";
import web from "../../assets/home/desktop/image-web-design-large.jpg";
import webTablet from "../../assets/home/tablet/image-web-design.jpg";
import webMobile from "../../assets/home/mobile/image-web-design.jpg";
import app from "../../assets/home/desktop/image-app-design.jpg";
import appTablet from "../../assets/home/tablet/image-app-design.jpg";
import appMobile from "../../assets/home/mobile/image-app-design.jpg";
import graphic from "../../assets/home/desktop/image-graphic-design.jpg";
import graphicTablet from "../../assets/home/tablet/image-graphic-design.jpg";
import graphicMobile from "../../assets/home/mobile/image-graphic-design.jpg";
import smallCircle from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

function Home() {
  const screen = useScreenSize().width;

  return (
    <>
      <section className="mb-32 relative">
        <div className="bg-peach w-full overflow-hidden h-[850px] xl:h-[640px] md:rounded-2xl xl:flex xl:justify-between">
          <div className="text-white overflow-hidden text-center h-[450px] xl:h-full py-10 px-6 md:pt-20 md:pb-0 md:px-24 xl:w-[60%] xl:text-left">
            <h1 className="mb-6 text-3xl md:text-5xl">
              Award-winning custom designs and digital branding solutions
            </h1>
            <p className="mb-6">
              With over 10 years in the industry, we are experienced in creating
              fully responsive websites, app design, and engaging brand
              experiences. Find out more about our services.
            </p>
            <button className="btn-dark">Learn more</button>
          </div>
          <img
            src={phone}
            className="scale-150 md:scale-100 md:mx-auto xl:scale-150 md:relative md:top-[-120px] xl:top-28 xl:left-0"
            alt="Phone"
          />
        </div>
        <img
          src={hero}
          className="absolute right-0 top-0 z-10"
          alt="background hero"
        />
        <img
          src={leaf}
          className="absolute left-[-165px] bottom-[-250px] z-[-10] hidden xl:block"
          alt="Leaf"
        />
      </section>
      <section className="xl:flex xl:justify-between w-full md:h-[640px] mb-32">
        <DesignPhoto
          img={screen > 768 ? web : screen > 426 ? webTablet : webMobile}
          title="web"
        />
        <div className="xl:flex xl:flex-col xl:justify-between">
          <DesignPhoto
            img={screen > 768 ? app : screen > 426 ? appTablet : appMobile}
            title="app"
          />
          <DesignPhoto
            img={
              screen > 768
                ? graphic
                : screen > 426
                ? graphicTablet
                : graphicMobile
            }
            title="graphic"
          />
        </div>
      </section>
      <section className="xl:flex xl:justify-between xl:items-center mb-12 relative">
        <Attribute
          img={passionate}
          title="Passionate"
          para="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        />
        <Attribute
          img={resourceful}
          title="Resourceful"
          para="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs."
        />
        <Attribute
          img={friendly}
          title="Friendly"
          para="We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        />
        <img
          src={leaf}
          className="absolute right-[-165px] top-[125px] rotate-180 z-[-10] hidden xl:block"
          alt="Leaf"
        />
      </section>
    </>
  );
}

export default Home;

function DesignPhoto({ img, title }) {
  return (
    <div className="relative m-6 md:mx-0 xl:my-0">
      <img
        className="rounded-2xl h-[307px] md:h-full"
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
                className="inline-block mb-1 animate-pulse"
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
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

function Attribute({ img, title, para }) {
  return (
    <div className="mx-6 my-12 text-center md:text-left xl:text-center xl:w-[375px] md:flex xl:flex-col md:mb-8 xl:mb-0">
      <div className="relative">
        <img className="mx-auto" src={img} alt="Attribute image" />
        <img
          className="absolute top-0 left-[25%] z-[-10]"
          src={smallCircle}
          alt="small circle"
        />
      </div>
      <div className="md:ml-8 md:w-[456px] xl:w-full">
        <h3 className="my-8 uppercase">{title}</h3>
        <p className="tracking-normal">{para}</p>
      </div>
    </div>
  );
}

Attribute.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};
