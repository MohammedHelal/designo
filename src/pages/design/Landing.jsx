import PropTypes from "prop-types";

function Landing({ title, para }) {
  return (
    <section
      id="Landing"
      className="my-12 py-20 px-6 w-full text-white text-center md:rounded-2xl bg-right-top md:bg-center bg-peach bg-no-repeat bg-[url('/src/assets/web-design/desktop/bg-pattern-intro-web.svg')]"
    >
      <h1 className="my-6 text-3xl md:text-5xl">{title}</h1>
      <p className="my-6 md:mx-auto md:w-[500px]">{para}</p>
    </section>
  );
}

Landing.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default Landing;
