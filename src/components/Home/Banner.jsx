
import img from "../../assets/image/Image_20241209_185356541[1].jpg";
import { RxReader } from "react-icons/rx";
import { MdOutlineSimCardDownload } from "react-icons/md";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 p-3 lg:p-10 ">
      
      <div className=" lg:w-2/3 text-center lg:text-left py-5 lg:py-24 text-white mx-auto order-2 lg:order-1 lg:px-28 ">
        <h2 data-aos="fade-up" className="text-2xl ">
          Ali Ahmed Rahi
        </h2>
        <h3 data-aos="fade-down" className="uppercase text-3xl pt-3">
          Frontend Developer
        </h3>
        <p data-aos="fade-up" className="text-lg pt-4">
          I am a frontend developer with expertise in HTML, CSS, JavaScript, and
          React. <br />I specialize in creating responsive, user-friendly web
          interfaces that deliver seamless user experiences.
        </p>

        <div>
          <a
          href="https://drive.google.com/file/d/1cBE2ikadZEOCkG09ES9Z-43yglsW_GP5/view?usp=drive_link"
          target="blank"
            data-aos="flip-down"
            className="btn rounded-full bg-white text-black mt-5 hover:bg-slate-400 "
          >
            Resume <RxReader className="text-lg" />
          </a>
          <a
          href="https://drive.google.com/uc?export=download&id=1cBE2ikadZEOCkG09ES9Z-43yglsW_GP5"
            data-aos="flip-down"
            className="btn mx-5 rounded-full bg-white text-black mt-5 hover:bg-slate-400"
          >
           DownLode Resume <MdOutlineSimCardDownload className="text-lg" />
          </a>
        </div>
      </div>
      <div className="lg:w-1/3 flex justify-center mx-auto order-1 lg:order-2 ">
        <img
          className="w-36 lg:w-96 rounded-full"
          src={img}
          alt="Ali Ahmed Rahi"
        />
      </div>
    </div>
  );
};

export default Banner;
