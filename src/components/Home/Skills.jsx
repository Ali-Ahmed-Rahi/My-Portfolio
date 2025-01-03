import img from "../../assets/skill/html-5.png";
import img2 from "../../assets/skill/css-3.png";
import img3 from "../../assets/skill/js.png";
import img5 from "../../assets/skill/science.png";
import img6 from "../../assets/skill/node-js.png";
import img7 from "../../assets/skill/1646733543.webp";
import img8 from "../../assets/skill/mongo-svgrepo-com.svg";
import img9 from "../../assets/skill/firebase-svgrepo-com.svg";
import img10 from "../../assets/skill/git-icon-2048x2048-juzdf1l5.png";
import img11 from "../../assets/skill/github.png";
import img12 from "../../assets/skill/vercel.png"
import img13 from "../../assets/skill/1657421703592.png"
import img14 from "../../assets/skill/nextjs.png"
import img15 from "../../assets/skill/tailwind.svg"
import img16 from "../../assets/skill/favicon-192.png"


const Skills = () => {
  return (
    <div id="skills" className="mt-10 p-4  ">
      <div className="flex items-center justify-center ">
        <div className="flex-grow border-t border-white"></div>
        <span data-aos="flip-down" className="mx-4 text-white font-bold text-4xl">Gain Skills</span>
        <div className="flex-grow border-t border-white"></div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-52 ">
          <img
            data-aos="fade-up"
            className="border w-40 h-40 p-10 hover:border-orange-600 hover:border-4 rounded-lg"
            src={img}
            alt=""
          />
          <img
            data-aos="fade-down"
            className="border w-40 h-40 p-10 hover:border-blue-400 hover:border-4 rounded-lg"
            src={img2}
            alt=""
          />
          <img
            data-aos="fade-up"
            className="border w-40 h-40 p-10 hover:border-yellow-500 hover:border-4 rounded-lg"
            src={img3}
            alt=""
          />
          <img
            data-aos="fade-down"
            className="border w-40 h-40 p-10 hover:border-cyan-400 hover:border-4 rounded-lg lg:hidden" // for screen only this one is hidden for lg
            src={img5}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-52 ">
          <img
            data-aos="fade-down"
            className="border w-40 h-40 p-10 hover:border-cyan-400 hover:border-4 rounded-lg"
            src={img5}
            alt=""
          />
          <img
            data-aos="fade-up"
            className="border w-40 h-40 p-10 hover:border-green-500 hover:border-4 rounded-lg"
            src={img6}
            alt=""
          />
          <img
            data-aos="fade-down"
            className="border w-40 h-40 p-10  hover:border-4 rounded-lg"
            src={img7}
            alt=""
          />
          <img
            data-aos="fade-up"
            className="border w-40 h-40 p-10 hover:border-green-600 hover:border-4 rounded-lg"
            src={img8}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-52 ">
          <img
            data-aos="fade-down"
            className="border w-40 h-40 p-10 hover:border-yellow-400 hover:border-4 rounded-lg"
            src={img9}
            alt=""
          />
          <img
            data-aos="fade-up"
            className="border w-40 h-40 p-10 hover:border-orange-600 hover:border-4 rounded-lg"
            src={img10}
            alt=""
          />
          <img
            data-aos="fade-down"
            className="border w-40 h-40 p-10 hover:border-4 rounded-lg"
            src={img11}
            alt=""
          />
          <img
            data-aos="fade-down"
            className="border w-40 h-40 p-10 hover:border-slate-600 hover:border-4 rounded-lg lg:hidden" // for screen only this one is hidden for lg
            src={img16}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-52 ">
          <img
            data-aos="fade-down"
            className="border w-40 h-40 p-10  hover:border-4 rounded-lg"
            src={img12}
            alt=""
          />
          <img
            data-aos="fade-up"
            className="border w-40 h-40 p-10 hover:border-purple-700 hover:border-4 rounded-lg"
            src={img13}
            alt=""
          />
          <img
            data-aos="fade-down"
            className="border w-40 h-40 p-10  hover:border-4 rounded-lg"
            src={img14}
            alt=""
          />
          <img
            data-aos="fade-up"
            className="border w-40 h-40 p-10 hover:border-blue-400 hover:border-4 rounded-lg"
            src={img15}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
