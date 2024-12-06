import img1 from "../../assets/Project/Screenshot 2024-12-04 200903.png";
import img2 from "../../assets/Project/Screenshot 2024-12-04 200550.png";
import img3 from "../../assets/Project/Screenshot 2024-12-04 200432.png";
import { FaArrowRightLong } from "react-icons/fa6";

const Project = () => {
  const projectData = [
    {
      title: "ByteBlaze",
      description:
        "This project focuses on building a dynamic, responsive website with HTML, CSS, and JavaScript. The goal was to create a seamless user experience across all devices.",
      imageLink: img1,
    },
    {
      title: "The Vine Bistro",
      description:
        "This project showcases my skills in full-stack development, using Node.js, Express.js, and MongoDB to build a RESTful API. It includes features like user authentication and data storage.",

      imageLink: img2,
    },
    {
      title: "PothChola Foundation",
      description:
        "In this project, I developed an Foundation using React  for state management. It includes features like payment system integration etc.",

      imageLink: img3,
    },
  ];

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
          {projectData.map((project, index) => (
            <div key={index} className="border rounded-t-lg text-white">
              <figure>
                <img data-aos="zoom-in" src={project.imageLink} alt={project.title} />
              </figure>
              <div className="p-10">
                <h2 data-aos="zoom-up" className="text-center text-2xl font-bold">
                  {project.title} 
                </h2>
                <p data-aos="zoom-up">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div data-aos="flip-down" className="text-center mt-10">
        <button className="btn w-60 rounded-full bg-white hover:bg-slate-400 text-black">Show More <FaArrowRightLong /></button>
      </div>
    </div>
  );
};

export default Project;
