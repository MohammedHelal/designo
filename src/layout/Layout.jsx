import logo from "../assets/shared/desktop/logo-dark.png";
//import logoWhite from "../assets/shared/desktop/logo-light.png";

function Layout() {
  return (
    <>
      <header>
        <nav className="w-full px-6 py-12 flex flex-row justify-between items-center">
          <img src={logo} alt="Logo header" />
          <ul className="flex flex-row items-center">
            <li className="px-6 cursor-pointer">Our Company</li>
            <li className="px-6 cursor-pointer">Locations</li>
            <li className="px-6 cursor-pointer">Contact</li>
          </ul>
        </nav>
      </header>
      <footer></footer>
    </>
  );
}

export default Layout;
