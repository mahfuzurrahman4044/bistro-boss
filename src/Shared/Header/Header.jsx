import { Link, NavLink } from "react-router-dom";
import icon from "../../assets/icon/Bistro Boss Our Shop Icon.png";
import ProfileIcon from "../../assets/icon/Profile.jpeg";
import { useContext, useState } from "react";
import { AuthContext } from "../../Account/Provider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext)

  const handleLogOut = () => {
    logOut()
      .then({})
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Logged out",
      showConfirmButton: false,
      timer: 1500
    });
  }

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
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/order">
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/contactUs">Contact Us</NavLink>
              </li>
              <li>
                {
                  user ? <div>
                    <li className="">
                      <button onClick={toggleProfileMenu}>
                        <img
                          className="h-7 w-7 rounded-full"
                          src={ProfileIcon}
                          alt="Profile"
                        />
                      </button>
                      {isProfileMenuOpen && (
                        <ul className="absolute mt-10 w-48 py-2 bg-black bg-opacity-20 text-white rounded-lg shadow-lg">
                          <li className="px-4 py-2 hover:bg-slate-300 rounded-md">
                            <Link onClick={closeProfileMenu} to="/profile">
                              Profile
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:bg-slate-300 rounded-md">
                            <Link onClick={closeProfileMenu && handleLogOut} to="/">
                              Log out
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li></div>
                    : <li>
                      <NavLink className="btn btn-ghost border border-amber-700" to="/login">Log in</NavLink>
                    </li>
                }
              </li>
            </ul>
          </div>
          <div>
            <div className="font-serif text-center">
              <Link to="/">BISTRO BOSS <br />
                <span>Restaurant</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex justify-center">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/order">
                Order

              </NavLink>
            </li>
            {
              user ?
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                :
                <></>
            }
            <li>
              <NavLink to="/contactUs">Contact Us</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end hidden lg:block ">
          <ul className="menu menu-horizontal px-1 flex justify-end items-center">
            <li>
              {
                user ?
                  <div>
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
                          <li className="px-4 py-2 hover:border border-amber-700 rounded-md">
                            <Link onClick={closeProfileMenu} to="/profile">
                              Profile
                            </Link>
                          </li>
                          <li className="px-4 py-2 hover:border border-amber-700 rounded-md">
                            <Link onClick={closeProfileMenu && handleLogOut} to="/">
                              Log out
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li></div>
                  : <li>
                    <NavLink className="btn btn-ghost border-amber-700" to="/login">Log in</NavLink>
                  </li>
              }
            </li>
          </ul>
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;
