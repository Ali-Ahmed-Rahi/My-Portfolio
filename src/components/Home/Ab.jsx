// import { FaArrowRightLong } from "react-icons/fa6";

import { FaArrowRightLong } from "react-icons/fa6";
import { SlBadge } from "react-icons/sl";
import { Link } from "react-router-dom";

const Ab = () => {
  return (
    <div id="about" className="p-4 ">
      <div className="grid lg:grid-cols-2 w-full gap-5 lg:gap-0">
        <div className="hidden sm:block "></div>
        {/*  */}
        <div className=" text-white pt-5 p-10 border lg:rounded-full">
          <div className="text-center">
            <h2
              data-aos="flip-down"
              className="text-4xl font-semibold text-white border-b-2 border-gray-300 inline-block"
            >
              Get To Know Me
            </h2>
          </div>
          <p className="mt-5">
            I&apos;m Ali Ahmed Rahi, a passionate frontend developer dedicated
            to creating dynamic and responsive web applications. I specialize in
            crafting user-friendly interfaces using HTML, CSS, JavaScript, and
            React. I enjoy transforming ideas into visually appealing designs
            and ensuring seamless functionality. With a strong focus on clean
            code and modern development practices,I strive to deliver
            exceptional user experiences...
          </p>
          <div data-aos="flip-down" className="text-center mt-10">
            <Link
              to="/about"
              className="btn w-60 rounded-full bg-white hover:bg-slate-400 text-black"
            >
              Show More <FaArrowRightLong />
            </Link>
          </div>
        </div>
        {/*  */}
        <div className="h-80  p-10 border rounded-full">
          <div className="text-center">
            <h2
              data-aos="flip-down"
              className="text-4xl font-semibold text-white border-b-2 border-gray-300 inline-block"
            >
              Education
            </h2>
          </div>
          <div className="text-white flex items-center gap-3 mt-5">
            <SlBadge className="text-4xl hidden sm:block" />
            <div>
              <h2 className="text-xl font-semibold">
                Bachelor in Business Administration
              </h2>
              <h3 className="font-semibold">BeaniBazer Govt Collage</h3>
              <p >2024</p>
            </div>
          </div>
        </div>

        <div className="hidden sm:block "></div>
      </div>
    </div>
  );
};

export default Ab;
