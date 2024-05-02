import PropTypes from "prop-types";

import logo from "../assets/shared/desktop/logo-dark.png";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function Layout({ children }) {
  return (
    <>
      <header className="md:mb-12">
        <Navbar logo={logo} />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Layout;
