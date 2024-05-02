import PropTypes from "prop-types";

function Landing({ title, para }) {
  return (
    <section
      id="Landing"
      className="my-12 bg-peach w-full text-white text-center py-20 px-6 bg-right-top bg-no-repeat bg-[url('/src/assets/web-design/desktop/bg-pattern-intro-web.svg')]"
    >
      <h1 className="text-3xl my-6">{title}</h1>
      <p className="my-6">{para}</p>
    </section>
  );
}

Landing.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default Landing;
