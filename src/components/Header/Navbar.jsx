import { navLinks } from "../../data";
import logo from "../../assets/nav-icon.svg";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <nav className="w-full bg-main text-white py-4 fixed top-0 z-20 flex items-center px-6 sm:px-16">
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <div className=" flex items-center gap-2">
          <div className="relative h-9 w-9">
            <img src={logo} alt="Saurabh nav-icon" />
          </div>
          <p className="text-[20px] font-semibold">Saurabh</p>
        </div>
        <ul className="hidden md:flex list-none flex-row gap-10">
          {navLinks.map((navItem) => (
            <li
              className="text-[18px] cursor-pointer hover:text-[#dd32f3]"
              key={navItem.id}
            >
              {navItem.displayValue}
            </li>
          ))}
        </ul>
        <div className="md:hidden">
          <MobileNav/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
