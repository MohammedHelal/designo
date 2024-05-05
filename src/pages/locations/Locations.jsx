import useScreenSize from "../../useHooks/useScreenSize";
import PropTypes from "prop-types";

import canada from "../../assets/locations/tablet/image-map-canada.png";
import australia from "../../assets/locations/tablet/image-map-australia.png";
import uk from "../../assets/locations/tablet/image-map-uk.png";
import canadaDesktop from "../../assets/locations/desktop/image-map-canada.png";
import australiaDesktop from "../../assets/locations/desktop/image-map-australia.png";
import ukDesktop from "../../assets/locations/desktop/image-map-united-kingdom.png";

function Locations() {
  const screen = useScreenSize().width;

  return (
    <>
      <Article
        img={screen > 768 ? canadaDesktop : canada}
        id="canada"
        title="Canada"
        para1={[
          <strong key="c01" className="font-bold">
            Designo Central Office
          </strong>,
          <br key="c02" />,
          "3886 Wellington Street",
          <br key="c03" />,
          "Toronto, Ontario M9C 3J5",
          <br key="c04" />,
        ]}
        para2={[
          <strong key="c05" className="font-bold">
            Contact
          </strong>,
          <br key="c06" />,
          "P : +1 253-863-8967",
          <br key="c07" />,
          "M : contact@designo.co",
          <br key="c08" />,
        ]}
      />
      <Article
        className="xl:flex-row-reverse"
        reverse
        id="australia"
        img={screen > 768 ? australiaDesktop : australia}
        title="Australia"
        para1={[
          <strong key="a01" className="font-bold">
            Designo AU Office
          </strong>,
          <br key="a02" />,
          "19 Balonne Street",
          <br key="a03" />,
          "New South Wales 2443",
          <br key="a04" />,
        ]}
        para2={[
          <strong key="a05" className="font-bold">
            Contact
          </strong>,
          <br key="a06" />,
          "P : (02) 6720 9092",
          <br key="a07" />,
          "M : contact@designo.au",
          <br key="a08" />,
        ]}
      />
      <Article
        img={screen > 768 ? ukDesktop : uk}
        id="united kingdom"
        title="United Kingdom"
        para1={[
          <strong key="u01" className="font-bold">
            Designo UK Office
          </strong>,
          <br key="u02" />,
          "13 Colorado Way",
          <br key="u03" />,
          "Rhyd-y-fro SA8 9GA",
          <br key="u04" />,
        ]}
        para2={[
          <strong key="u05" className="font-bold">
            Contact
          </strong>,
          <br key="u06" />,
          "P : 078 3115 1400",
          <br key="u07" />,
          "M : contact@designo.uk",
          <br key="u08" />,
        ]}
      />
    </>
  );
}

export default Locations;

function Article({ className = "", reverse, id, img, title, para1, para2 }) {
  return (
    <section id={id} className={`${className} my-12 xl:flex`}>
      <img
        className={`md:rounded-t-2xl lg:rounded-t-none ${
          reverse ? "xl:rounded-r-2xl" : "xl:rounded-l-2xl"
        } w-full md:w-auto`}
        src={img}
        alt="World class talent image"
      />
      <article
        className={`py-12 px-6 xl:px-12 xl:w-full xl:flex xl:flex-col xl:item-center xl:justify-center text-center xl:text-left bg-lighterPeach rounded-b-2xl lg:rounded-b-none ${
          reverse ? "xl:rounded-l-2xl" : "xl:rounded-r-2xl"
        }`}
      >
        <div>
          <h2 className="text-3xl md:text-[40px] my-8 text-peach">{title}</h2>
          <div className="xl:flex xl:items-center xl:justify-between xl:w-[450px]">
            <p className="my-6">{para1}</p>
            <p className="my-6">{para2}</p>
          </div>
        </div>
      </article>
    </section>
  );
}

Article.propTypes = {
  className: PropTypes.string,
  reverse: PropTypes.bool,
  id: PropTypes.string,
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para1: PropTypes.string.isRequired,
  para2: PropTypes.string.isRequired,
};
