import { Link } from "react-router-dom";
import icon from "../../assets/icon/Bistro Boss Our Shop Icon.png";
import ProfileIcon from "../../assets/icon/Profile.jpeg";
import { useState } from "react";

const Header = () => {
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
  };

  const closeProfileMenu = () => {
    if (isProfileMenuOpen) {
      setProfileMenuOpen(false);
    }
  };
  return (
    <div className="">
      <div className="navbar fixed z-10 bg-opacity-20 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-opacity-20 bg-black rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/ourMenu">Our Menu</Link>
              </li>
              <li>
                <Link to="/ourShop">
                  Our Shop{" "}
                  <img
                    className="h-5 w-5"
                    src={icon}
                    alt="Bistro Boss Our Shop Icon"
                  />
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/login">Log Out</Link>
              </li>
              <li>
                <Link to="/contactUs">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-serif text-center">
              BISTRO BOSS <br />
              <span>Restaurant</span>
            </div>
          </div>
        </div>
        {/* <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ourMenu">Our Menu</Link>
            </li>
            <li>
              <Link to="/ourShop">Our Shop</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signUp">Sign Up</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div> */}
        <div className="navbar-end hidden lg:block">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ourMenu">Our Menu</Link>
            </li>
            <li>
              <Link to="/ourShop">
                Our Shop{" "}
                <img
                  className="h-5 w-5"
                  src={icon}
                  alt="Bistro Boss Our Shop Icon"
                />
              </Link>
            </li>
            <li>
              <Link to="/contactUs">Contact Us</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li className="">
              <button onClick={toggleProfileMenu}>
                <img
                  className="h-7 w-7 rounded-full"
                  src={ProfileIcon}
                  alt="Profile"
                />
              </button>
              {isProfileMenuOpen && (
                <ul className="absolute right-0 mt-10 w-48 py-2 bg-black bg-opacity-20 text-white rounded-lg shadow-lg">
                  <li className="px-4 py-2 hover:bg-slate-300 rounded-md">
                    <Link onClick={closeProfileMenu} to="/profile">
                      Profile
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-slate-300 rounded-md">
                    <Link onClick={closeProfileMenu} to="/login">
                      Log Out
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;