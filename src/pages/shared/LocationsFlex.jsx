import { Link } from "react-router-dom";

import canada from "../../assets/shared/desktop/illustration-canada.svg";
import australia from "../../assets/shared/desktop/illustration-australia.svg";
import uk from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import smallCircle from "../../assets/shared/desktop/bg-pattern-small-circle.svg";

import PropTypes from "prop-types";

function LocationsFlex() {
  return (
    <section className="my-36 xl:my-24 xl:flex xl:items-center xl:justify-around">
      <Location img={canada} title="canada" />
      <Location img={australia} title="australia" />
      <Location img={uk} title="united kingdom" />
    </section>
  );
}

export default LocationsFlex;

function Location({ img, title }) {
  return (
    <div className="relative text-center my-24">
      <img
        className="absolute top-0"
        style={{ left: "calc(50% - 101px)" }}
        src={smallCircle}
        alt="small circle background"
      />
      <img className="mx-auto mb-16" src={img} alt="Location image" />
      <h3 className="my-8 uppercase">{title}</h3>
      <Link to="/locations">
        <button className="btn">see location</button>
      </Link>
    </div>
  );
}

Location.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
