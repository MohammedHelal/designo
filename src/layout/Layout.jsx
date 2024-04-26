import PropTypes from "prop-types";

import logo from "../assets/shared/desktop/logo-dark.png";
import logoWhite from "../assets/shared/desktop/logo-light.png";
import facebook from "../assets/shared/desktop/icon-facebook.svg";
import instagram from "../assets/shared/desktop/icon-instagram.svg";
import pinterest from "../assets/shared/desktop/icon-pinterest.svg";
import twitter from "../assets/shared/desktop/icon-twitter.svg";
import youtube from "../assets/shared/desktop/icon-youtube.svg";

function Layout({ children }) {
  return (
    <>
      <header className="mb-12">
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
        <Navbar logo={logoWhite} />
        <hr />
        <div className="flex justify-between items-center mt-12">
          <div>
            <h4 className="text-white">Designo Central Office</h4>
            <p className="text-zinc-600">3886 Wellington Street</p>
            <p className="text-zinc-600">Toronto, Ontario M9C 3J5</p>
          </div>
          <div>
            <h4 className="text-white">Contact Us (Central Office)</h4>
            <p className="text-zinc-600">P: +1 253-863-8967</p>
            <p className="text-zinc-600">M: contact@designo.co</p>
          </div>
          <div className="flex item-center">
            <img
              src={facebook}
              className="pl-6 cursor-pointer"
              alt="Facebook icon"
            />
            <img
              src={youtube}
              className="pl-6 cursor-pointer"
              alt="Youtube icon"
            />
            <img
              src={twitter}
              className="pl-6 cursor-pointer"
              alt="Twitter icon"
            />
            <img
              src={pinterest}
              className="pl-6 cursor-pointer"
              alt="Pinterest icon"
            />
            <img
              src={instagram}
              className="pl-6 cursor-pointer"
              alt="Instagram icon"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function Navbar({ logo }) {
  return (
    <nav className="w-full py-12 flex flex-row justify-between items-center">
      <img className="w-48" src={logo} alt="Logo header" />
      <ul className="flex flex-row items-center">
        <li className="px-6 cursor-pointer uppercase">Our Company</li>
        <li className="px-6 cursor-pointer uppercase">Locations</li>
        <li className="pl-6 cursor-pointer uppercase">Contact</li>
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  logo: PropTypes.string.isRequired,
};
