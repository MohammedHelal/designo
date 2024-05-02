import { useState } from "react";
import PropTypes from "prop-types";
import useScreenSize from "../../useHooks/useScreenSize";
import Modal from "../../components/Modal";

import hamburger from "../../assets/shared/mobile/icon-hamburger.svg";
import close from "../../assets/shared/mobile/icon-close.svg";

function Navbar({ logo, footer }) {
  const screen = useScreenSize().width;
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <nav
      className={`relative flex justify-between items-center w-full px-6 md:px-0 ${
        footer && "flex-col md:flex-row"
      }`}
    >
      <img className="w-48 py-6" src={logo} alt="Logo header" />
      {!footer && !modal && screen <= 600 && (
        <img src={hamburger} alt="Hamburger icon" onClick={openModal} />
      )}
      {!footer && (
        <Modal
          open={modal}
          className="mt-3 mx-0 max-w-full w-full bg-transparent"
        >
          <div className="px-6 py-3 cursor-pointer uppercase bg-transparent">
            <img
              className="ml-auto p-1"
              src={close}
              alt="Close button"
              onClick={closeModal}
            />
          </div>
          <ul className="bg-black text-white">
            <li className="px-6 py-3 cursor-pointer uppercase">Our Company</li>
            <li className="px-6 py-3 cursor-pointer uppercase">Locations</li>
            <li className="px-6 py-3 cursor-pointer uppercase">Contact</li>
          </ul>
        </Modal>
      )}
      <ul
        className={`${
          !footer && "hidden"
        } text-center md:flex md:flex-row md:items-center`}
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
export default Navbar;
