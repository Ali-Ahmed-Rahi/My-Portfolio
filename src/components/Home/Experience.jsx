import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Experience = () => {

  useEffect(() => {
    Aos.init({
      duration: 800, 
      once: true, 
    });
  }, []);
  
  return (
    <>
      <div className="mt-8 p-4 ">
        <div className="flex items-center justify-center ">
          <div className="flex-grow border-t border-white"></div>
          <span data-aos="flip-down" className="mx-4 text-white font-bold text-4xl">Experiences</span>
          <div className="flex-grow border-t border-white"></div>
        </div>
        <div className="mt-8 grid lg:grid-cols-2">
          <div data-aos="zoom-in" className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md border text-white">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <h4 className="text-xl font-bold">Frontend Development</h4>
                  <p className="text-lg">For Client - 2024</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-500">
                    Present
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm ">
              <p>
                Developed and maintained fully responsive websites using HTML5,
                CSS3, and JavaScript, ensuring seamless user experiences across
                various devices and screen sizes
              </p>
              <p>
                Leveraged Tailwind’s responsive utilities to create mobile-first
                designs, ensuring web applications look great on all screen
                sizes without writing custom media queries.m.
              </p>
              <p>
                Built dynamic user interfaces with React, including reusable
                components and state management using hooks and context API
              </p>
            </div>
          </div>
          {/*  */}
          <div data-aos="zoom-in" className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md border text-white mt-4 lg:mt-0">
            <div className="flex justify-between p-4">
              <div className="flex space-x-4">
                <div>
                  <h4 className="text-xl font-bold">Full Stack Development</h4>
                  <p className="text-lg">Personal Project - 2024</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-green-500">
                    Present
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 space-y-2 text-sm ">
              <p>
                Built RESTful APIs using Node.js and Express.js to handle
                server-side operations like data validation, routing, and
                middleware integration
              </p>
              <p>
                Developed secure authentication systems using Node.js,
                integrating JWT (JSON Web Tokens) for user sessions
              </p>
              <p>
                Continuously exploring advanced Node.js features such as
                streams, clustering, and asynchronous patterns for
                high-performance applications
              </p>
              <p>
                Experimenting with MongoDB’s advanced capabilities, including
                transactions and sharding, to handle complex data structures and
                large-scale applications
              </p>
            </div>
          </div>
        </div>
        <div data-aos="flip-down" className="text-center">
          <Link to='/exp' className="btn rounded-full bg-white text-black mt-5 hover:bg-slate-400">
            Show more <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Experience;
