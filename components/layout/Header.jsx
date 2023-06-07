import { useState } from "react";
import Search from "../ui/Search";
import Logo from "../../components/ui/Logo";
import {FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import { AiFillCloseCircle } from "react-icons/ai"
import { useRouter } from "next/router";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false)
  const [isMenuModal, setIsMenuModal] = useState(false)

  const router = useRouter("")

  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary" }`}>
      <div className="container text-white mx-auto flex justify-between items-center h-full">
          <Logo />
        <nav className={`sm:static absolute top-0 left-0 sm:flex hidden sm:h-auto w-full h-screen sm:w-auto sm:text-white text-black sm:bg-transparent bg-white ${isMenuModal === true && '!grid place-content-center'}`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
            <a href="">
                <FaUserAlt className="hover:text-primary transition-all"/>
            </a>
            <a href="">
                <FaShoppingCart className="hover:text-primary transition-all"/>
            </a>
            <button onClick={() => setIsSearchModal(true)}>
                <FaSearch className="hover:text-primary transition-all"/>
            </button>
            <a href="" className="md:inline-block hidden">
                <button className="btn-primary">Order Online</button>
            </a>
            <button className="sm:hidden inline-block">
              <GiHamburgerMenu className="text-xl hover:text-primary transition-all" onClick={() => setIsMenuModal(true)}/>
            </button>
            {isMenuModal && <button className='absolute top-4 right-4' onClick={() => setIsMenuModal(false)}>
                    <AiFillCloseCircle size={30} className='text-primary transition-all'/>
                </button>}
        </div>
      </div>
      {isSearchModal && (
        <Search setIsSearchModal={setIsSearchModal}/>
      )}
    </div>
  );
};

export default Header;
