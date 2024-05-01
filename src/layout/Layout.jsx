import PropTypes from "prop-types";
import useScreenSize from "../useHooks/useScreenSize";

import logo from "../assets/shared/desktop/logo-dark.png";
import logoWhite from "../assets/shared/desktop/logo-light.png";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";
import hamburger from "../assets/shared/mobile/icon-hamburger.svg";

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

function Footer() {
  return (
    <footer className="w-full pt-[144px] pb-[72px]">
      <div className="inner-footer">
        <Navbar logo={logoWhite} footer />
        <hr />
        <div className="md:flex md:justify-between md:items-center mt-6 text-center md:text-left">
          <div className="my-6">
            <h4 className="text-white">Designo Central Office</h4>
            <p className="text-zinc-600">3886 Wellington Street</p>
            <p className="text-zinc-600">Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="my-6">
            <h4 className="text-white">Contact Us (Central Office)</h4>
            <p className="text-zinc-600">P: +1 253-863-8967</p>
            <p className="text-zinc-600">M: contact@designo.co</p>
          </div>
          <div className="flex item-center justify-center my-6">
            <img
              src={facebook}
              className="pl-3 cursor-pointer"
              alt="Facebook icon"
            />
            <img
              src={youtube}
              className="pl-3 cursor-pointer"
              alt="Youtube icon"
            />
            <img
              src={twitter}
              className="pl-3 cursor-pointer"
              alt="Twitter icon"
            />
            <img
              src={pinterest}
              className="pl-3 cursor-pointer"
              alt="Pinterest icon"
            />
            <img
              src={instagram}
              className="pl-3 cursor-pointer"
              alt="Instagram icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function Navbar({ logo, footer }) {
  const screen = useScreenSize().width;

  return (
    <nav
      className={`flex items-center relative w-full pb-6 px-3 md:px-0  ${
        footer
          ? "flex-col md:flex-row justify-center md:justify-between"
          : "justify-between"
      }`}
    >
      <img className="w-48 py-6" src={logo} alt="Logo header" />
      {!footer && screen <= 600 && <img src={hamburger} alt="Hamburger icon" />}
      <ul
        className={`${
          footer
            ? "text-center"
            : "hidden md:block absolute top-20 left-0 md:static w-full md:w-auto bg-black md:bg-white text-white md:text-black z-20 md:z-0"
        } md:flex md:flex-row md:items-center`}
      >
        <li className="px-6 py-3 cursor-pointer uppercase">Our Company</li>
        <li className="px-6 py-3 cursor-pointer uppercase">Locations</li>
        <li className="px-6 md:pr-0 py-3 cursor-pointer uppercase">Contact</li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
  footer: PropTypes.bool,
};
