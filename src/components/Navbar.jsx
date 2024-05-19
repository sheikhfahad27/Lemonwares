import logo from "../assets/logo.png";
import hamburger from "../assets/hamburger.png";
import { useState } from "react";

function Navbar() {
  const [dropdown, setdropdown] = useState(false);
  return (
    <>
      <header className="flex justify-between mx-auto container font-bold my-5">
        <div className="flex items-center">
          <img src={logo} alt="" />

          <span className="ml-7 ">
            <a href="@"> our servoce</a>
          </span>
        </div>

        <nav className="hidden sm:flex justify-center items-center gap-x-5">
          <a href="#">About</a>

          <a href="#">Blog&News</a>

          <a href="#">Contact</a>
        </nav>

        <div className="  hidden sm:flex items-center mr-24 gap-10">
          <a href="#">Account</a>

          <a href="#">
            <i className="fa-solid text-red-700 fa-phone"></i>
            +2349067322844
          </a>
        </div>

        <div onClick={() => setdropdown(!dropdown)} className="w-8  sm:hidden">
          <img src={hamburger} alt="" />
        </div>
      </header>

      {dropdown ? (
        <div className="py-4 sm:hidden">
          <nav className="flex flex-col  justify-center items-center  gap-3">
            <a href="#">About</a>

            <a href="#">Blog&News</a>

            <a href="#">Contact</a>
          </nav>

          <div className="flex flex-col justify-center items-center  mt-3 gap-3">
            <a href="#">Account</a>

            <a href="#">
              <i className="fa-solid text-red-700 fa-phone"></i>
              +2349067322844
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
