import { useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";

const Nav = () => {
  const [navBar, setNavBar] = useState(false);
  const toggleNavBar = () => {
    setNavBar(!navBar);
  };
  return (
    <>
      <nav className="md:flex justify-center  text-white font-monteserat  py-4">
        <div className="relative">
          {/* <button onClick={toggleDarkMode}>btn</button> */}
          <div className="md:flex justify-stretch  text-textColor items-center ">
            <div className="md:px-0 md:pr-28 px-3 md:text-xl text-2xl flex justify-between md:py-0 py-2 text-white font-semibold">
              BrandName{" "}
              <span
                className="text-4xl px-2 md:hidden flex"
                onClick={toggleNavBar}
              >
                {navBar ? <RxCross1 /> : <IoMenuSharp />}
              </span>
            </div>

            <ul
              className={`md:flex md:items-center md:space-x-4 text-lg  text-white
            ${navBar ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            transition-all duration-500 ease-in-out overflow-hidden md:max-h-full md:opacity-100`}
            >
              <li className="px-4 md:py-0 py-3 ">Home</li>
              <li className="px-4 md:py-0 py-3">Product</li>
              <li className="px-4 md:py-0 py-3">Pricing</li>
              <li className="px-4 md:py-0 py-3">Contact</li>
            </ul>
            {/* <div className=" flex  absolute"></div> */}

            <div>
              <ul
                className={`md:flex md:px-6 px-4 items-center text-2xl ${
                  navBar ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                } transition-all duration-500 ease-in-out overflow-hidden md:max-h-full md:opacity-100`}
              >
                <li className="md:px-4  text-center flex justify-between md:pb-0 pb-3 text-lg text-white">
                  Login
                </li>
                <li className="bg-btncolor text-white text-lg  rounded px-4 py-4 text-center  cursor-pointer">
                  Join us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
