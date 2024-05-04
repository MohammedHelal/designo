import { Outlet } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import logo from "../assets/shared/desktop/logo-dark.png";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <>
      <header className="md:mb-12">
        <Navbar logo={logo} />
      </header>
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
