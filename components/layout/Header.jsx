import { useState } from "react";
import Search from "../ui/Search";
import Logo from "../../components/ui/Logo";
import {FaUserAlt, FaShoppingCart, FaSearch} from "react-icons/fa"
import {GiHamburgerMenu} from "react-icons/gi"
import { AiFillCloseCircle } from "react-icons/ai"
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false)
  const [isMenuModal, setIsMenuModal] = useState(false)

  const router = useRouter()

  return (
    <div className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary" }`}>
      <div className="container text-white mx-auto flex justify-between items-center h-full">
          <Logo />
        <nav className={`sm:static absolute top-0 left-0 sm:flex hidden sm:h-auto w-full h-screen sm:w-auto sm:text-white text-black sm:bg-transparent bg-white ${isMenuModal === true && '!grid place-content-center'}`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Book Table</Link>
            </li>
          </ul>
        </nav>
        <div className="flex gap-x-4 items-center">
            <Link href="/">
                <FaUserAlt className="hover:text-primary transition-all"/>
            </Link>
            <Link href="/">
                <FaShoppingCart className="hover:text-primary transition-all"/>
            </Link>
            <button onClick={() => setIsSearchModal(true)}>
                <FaSearch className="hover:text-primary transition-all"/>
            </button>
            <Link href="/" className="md:inline-block hidden">
                <button className="btn-primary">Order Online</button>
            </Link>
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
