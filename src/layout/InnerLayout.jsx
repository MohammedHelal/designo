import Layout from "./Layout";
import PropTypes from "prop-types";

function InnerLayout({ children }) {
  return (
    <Layout>
      {children}
      <section className="relative bottom-[-100px] mx-6 md:mx-0 p-6 md:py-14 md:px-24 rounded-2xl text-white text-center xl:text-left bg-peach bg-no-repeat bg-[url('./assets/shared/desktop/bg-pattern-call-to-action.svg')] xl:bg-right xl:flex xl:justify-between xl:items-center">
        <div className="md:w-[480px] mb-12">
          <h2 className="my-4 xl:mr-36 leading-10 tracking-normal">
            Let’s talk about your project
          </h2>
          <p className="tracking-normal">
            Ready to take it to the next level? Contact us today and find out
            how our expertise can help your business grow.
          </p>
        </div>
        <button className="btn-dark">GET IN TOUCH</button>
      </section>
    </Layout>
  );
}

InnerLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default InnerLayout;
