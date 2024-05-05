import PropTypes from "prop-types";

function Landing({ className = "md:rounded-2xl", title, para }) {
  return (
    <section
      id="Landing"
      className={`my-12 py-12 px-6 w-full text-white text-center ${className} md:rounded-2xl bg-peach bg-no-repeat `}
    >
      <h1 className="my-6 text-4xl md:text-5xl">{title}</h1>
      <p className="my-6 md:mx-auto md:w-[500px]">{para}</p>
    </section>
  );
}
//bg-[url('/src/assets/web-design/desktop/bg-pattern-intro-web.svg')]
Landing.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
};

export default Landing;
