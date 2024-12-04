import { FaArrowRightLong } from "react-icons/fa6";

const Ab = () => {
  return (
    <div id="about" className=" mt-10 p-4">
      <div className="text-center">
        <h2 data-aos="flip-down" className="text-4xl font-semibold text-white border-b-2 border-gray-300 inline-block">
          Get To Know Me
        </h2>
      </div>
      <div  className="text-center mt-5 text-white ">
        <p data-aos="zoom-in">
          I'm Ali Ahmed Rahi, a passionate frontend developer dedicated to
          creating dynamic and responsive web applications. I specialize in
          crafting user-friendly interfaces <br /> using HTML, CSS, JavaScript, and
          React. I enjoy transforming ideas into visually appealing designs and
          ensuring seamless functionality. With a strong focus on  clean <br /> code and
          modern development practices,I strive to deliver exceptional
          user experiences. In addition to my frontend expertise,  I have a basic
          understanding of MongoDB, <br /> Node.js,   and Express.js. While I’m still
          building my skills in these technologies, I can confidently create
          easy-to-use web applications with functional backends. My goal is to
          <br /> further develop these abilities to build robust and professional
          full-stack projects in the future. Outside of coding, I love exploring
          new technologies and staying updated <br /> with the latest trends in web
          development. Let’s build something amazing together!
        </p>

        <button data-aos="flip-down" className="btn rounded-full bg-white text-black mt-5 hover:bg-slate-400">
          Read More <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default Ab;
