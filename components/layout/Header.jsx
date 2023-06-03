import Logo from "../../components/ui/Logo";
import {FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa"

const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container text-white mx-auto flex justify-between items-center h-full">
          <Logo />
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
            <a href="">
                <FaUserAlt/>
            </a>
            <a href="">
                <FaShoppingCart/>
            </a>
            <a href="">
                <FaSearch/>
            </a>
            <a href="">
                <button className="btn-primary">Order Online</button>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Header;