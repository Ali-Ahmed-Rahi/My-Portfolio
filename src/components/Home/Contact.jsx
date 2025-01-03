import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="mt-5 lg:mt-10 p-4 lg:mb-10">
      <div className="flex items-center justify-center ">
          <div className="flex-grow border-t border-white"></div>
          <span data-aos="flip-down" className="mx-4 text-white font-bold text-4xl">Contact Me</span>
          <div className="flex-grow border-t border-white"></div>
        </div>
      <div className="flex justify-center items-center mt-8">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-20 ">
          <p data-aos="zoom-in" className="lg:w-96 border h-16 flex justify-center items-center text-white text-2xl rounded-lg"><span className="pt-2 mx-2"><FaPhoneAlt /> </span> +8801942432047</p>
          <p data-aos="zoom-in" className="lg:w-96 border h-16 flex justify-center items-center text-white text-2xl rounded-lg"><span className="pt-2 mx-2"><MdEmail /> </span> aliahmedrahi44@gmail.com</p>
          <p data-aos="zoom-in" className=" lg:w-96 border h-16 flex justify-center items-center text-white text-2xl rounded-lg"><span className="pt-2 mx-2"><FaLinkedin /></span> Linkedin</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
