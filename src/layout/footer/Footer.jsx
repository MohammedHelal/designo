import Navbar from "../navbar/Navbar";

import logoWhite from "../../assets/shared/desktop/logo-light.png";
import facebook from "../../assets/shared/desktop/icon-facebook.svg";
import instagram from "../../assets/shared/desktop/icon-instagram.svg";
import pinterest from "../../assets/shared/desktop/icon-pinterest.svg";
import twitter from "../../assets/shared/desktop/icon-twitter.svg";
import youtube from "../../assets/shared/desktop/icon-youtube.svg";

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

export default Footer;
