import { RxReader } from "react-icons/rx";
import vdo from "../assets/Banner-vd/3130284-uhd_3840_2160_30fps.mp4";
import img2 from "../assets/Banner-vd/WhatsApp Image 2025-04-20 at 19.33.58_6f25836d.jpg";
import { FaArrowDown, FaGithub, FaLinkedin } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Ban = () => {
  return (
    <div className="p-2 mb-20 ">
      <div className="relative">
        <div>
          <video
            className=" w-full h-[400px] object-cover opacity-50 "
            autoPlay
            muted
            loop
          >
            <source src={vdo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* picture part */}
        <div className="absolute top-32 right-[650px] z-10">
          <img
            className="w-[400px] rounded-full z-10 "
            src={img2}
            alt="Ali Ahmed Rahi"
          />
        </div>
        <div className="absolute right-5 flex space-x-5 ">
          <a href="https://github.com/Ali-Ahmed-Rahi" target="_blank">
            <div className=" text-3xl text-white ">
            <FaFacebookSquare />
            </div>
          </a>
          <a href="https://github.com/Ali-Ahmed-Rahi" target="_blank">
            <div className=" text-3xl text-white ">
              <FaGithub />
            </div>
          </a>
          <a href="https://github.com/Ali-Ahmed-Rahi" target="_blank">
            <div className=" text-3xl text-white ">
            <FaLinkedin />
            </div>
          </a>
          
        </div>
      </div>
      {/* other part */}
      <div className=" mt-44 text-white flex items-start justify-between">
        <div>
          <h2 data-aos="fade-up" className="text-2xl font-bold">
            Ali Ahmed Rahi
          </h2>
          <h3 data-aos="fade-down" className="uppercase text-3xl pt-3">
            Frontend Developer
          </h3>
          <p data-aos="fade-up" className="text-lg pt-4">
            I am a frontend developer with expertise in HTML, CSS, JavaScript,
            and React. <br />I specialize in creating responsive, user-friendly
            web interfaces that deliver seamless user experiences.
          </p>
        </div>

        <div className="space-x-2">
          <a
            href="https://drive.google.com/file/d/1cBE2ikadZEOCkG09ES9Z-43yglsW_GP5/view?usp=drive_link"
            target="blank"
            data-aos="flip-down"
            className="btn rounded-full bg-white text-black hover:bg-slate-400 "
          >
            Resume <RxReader className="text-lg" />
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=1cBE2ikadZEOCkG09ES9Z-43yglsW_GP5"
            data-aos="flip-down"
            className="btn  rounded-full bg-white text-black  hover:bg-slate-400"
          >
            <FaArrowDown className="text-lg animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Ban;
