
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";


const Project = () => {
  const [data, SetData] = useState([]);

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => SetData(data));
  }, []);
  // console.log(data);
  if (!data) {
    return <div className="text-8xl font-bold flex justify-center items-center text-green-500">
      404
    </div>
  }

  return (
    <div id="projects" className="mt-10 p-4">
      <div className="flex items-center justify-center">
        <div className="flex-grow border-t border-white"></div>
        <span
          data-aos="flip-down"
          className="mx-4 text-white font-bold text-4xl"
        >
          Own Projects
        </span>
        <div className="flex-grow border-t border-white"></div>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {data.map((project, index) => (
            <div key={index} className="border rounded-t-lg text-white">
              <figure>
                <img data-aos="zoom-in " className="rounded-lg" src={project.image} alt="Image" />
              </figure>
              <div className="p-10">
                <h2
                  data-aos="zoom-up"
                  className="text-center text-2xl font-bold"
                >
                  {project.title}
                </h2>
                <ul className="list-disc">
                  {project.content.map((list, i) => (
                    <li
                      className="mt-5 "
                      key={i} // Use a unique key for each list item
                      dangerouslySetInnerHTML={{
                        __html: list
                        .replace(/\*\*(.*?)\*\*/g, '<span class="font-bold">$1</span>')
                        .replace(/\*\*(.*?)\*\*/g, '<span class="font-extrabold">$1</span>')
                        ,
                      }}
                    />
                  ))}
                </ul>
                <div className="mt-5">
                  <a href={project.LiveDemo} target="_blank" rel="noopener noreferrer" className="btn  w-full bg-white text-black rounded-full hover:bg-green-500"> Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="flip-down" className="text-center mt-10">
        <button className="btn w-60 rounded-full bg-white hover:bg-slate-400 text-black">
          Show More <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Project;
