import Layout from "./Layout";
import PropTypes from "prop-types";

function InnerLayout({ children }) {
  return (
    <Layout>
      {children}
      <section className="relative bottom-[-100px] flex justify-between items-center py-14 px-24 w-[1110px] h-[300px] text-white rounded-2xl bg-peach bg-right bg-no-repeat bg-[url('./assets/shared/desktop/bg-pattern-call-to-action.svg')]">
        <div className="w-[480px] h-full">
          <h2 className="my-4 mr-36 leading-10 tracking-normal">
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
