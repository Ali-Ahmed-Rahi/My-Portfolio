import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Navbar = () => {


  const navLink = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <HashLink smooth to='/#about'>
        <li>About</li>
      </HashLink>
      <HashLink smooth to='/#skills'>
        <li>Skills</li>
      </HashLink>
      <HashLink smooth to='/#projects'>
        <li>Project's</li>
      </HashLink>
      <NavLink to="/contact">
        <li>Contact Me</li>
      </NavLink>
      
    </>
  );
  return (
    <>
      <div className="navbar bg-black backdrop-blur-xl">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-4 text-white font-bold"
            >
              {navLink}
            </ul>
          </div>
          <Link to="/" className="px-5 text-white text-xl">
            RAHI
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex mx-5">
          <ul className="menu menu-horizontal px-1 gap-4 text-white font-semibold">
            {navLink}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
