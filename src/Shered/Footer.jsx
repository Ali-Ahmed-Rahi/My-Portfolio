import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-black text-white rounded p-10">
        <nav className="grid grid-flow-col gap-4">
          <Link to="/about" className="link link-hover">About</Link>
          <Link to="/" className="link link-hover">Skills</Link>
          <Link to="/" className="link link-hover">Projects</Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
          <Link to="/exp" className="link link-hover">
            Experiences
          </Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/Ali-Ahmed-Rahi" target="_blank">
              <div className="text-2xl">
                <FaGithub />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/ali-ahmed-rahi10/"
              target="_blank"
            >
              <div className="text-2xl">
                <GrLinkedin />
              </div>
            </a>
            <a href="mailto:aliahmedrahi44@gmail.com">
              <div className="text-3xl">
                <MdEmail />
              </div>
            </a>
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
