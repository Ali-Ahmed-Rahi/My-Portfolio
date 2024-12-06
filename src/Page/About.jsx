import { IoArrowBackCircleOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

const About = () => {
  return (
    <div>
      <HashLink smooth to='/#about' className="text-4xl text-white">
        <IoArrowBackCircleOutline />
        </HashLink>
      <div className="flex items-center justify-center ">
        <div className="flex-grow border-t border-white"></div>
        <span
          data-aos="flip-down"
          className="mx-4 text-white font-bold text-4xl"
        >
          About Me
        </span>
        <div className="flex-grow border-t border-white"></div>
      </div>
      <div className="text-center mt-5 text-white p-5">
        <p >
          I’m Ali Ahmed Rahi, a passionate and results-driven frontend developer
          specializing in creating dynamic, responsive, and user-friendly web
          applications. My expertise lies in{" "}
          <span className="font-bold">HTML, CSS, JavaScript,</span> and{" "}
          <span className="font-bold">React</span>,
          <br />
          where I combine technical proficiency with creative problem-solving to
          transform ideas into visually captivating and highly functional
          digital experiences. Whether it’s crafting pixel-perfect interfaces or
          ensuring smooth
          <br />
          performance across devices, I am committed to delivering projects that
          stand out. I thrive on writing clean, maintainable code and staying
          up-to-date with the latest trends in web development, ensuring that
          every application
          <br />I build aligns with modern standards and user expectations.
          Beyond my expertise in frontend technologies, I am actively expanding
          my skills in <span className="font-bold">
            {" "}
            backend development
          </span>{" "}
          with a focus on <span className="font-bold">
            MongoDB, Node.js,
          </span>{" "}
          and <span className="font-bold">Express.js</span>.
          <br />
          While I am still on the journey of mastering full-stack development, I
          have a solid understanding of building functional backends to
          complement user-focused frontends. My long-term goal is to build
          <span className="font-bold"> comprehensive full-stack solutions</span> that address real-world challenges
          and provide impactful user experiences. Outside of work, I enjoy
          playing cricket, which helps me stay active, and <span className="font-bold">solving puzzle games</span>,
          which sharpens my problem-solving skills. I also have a creative side,
          with a keen interest  in <span className="font-bold">video editing</span> and <span className="font-bold">design</span>, where I love
          experimenting with visual storytelling and aesthetics. As a gaming
          enthusiast, I dream of playing in <span className="font-bold">Esports</span> at least once time, combining my
          love for technology and competition into a unique
          experience. <br /> In addition to coding and my hobbies, I am deeply
          passionate about exploring new tools, libraries, and frameworks that
          push the boundaries of what’s possible in web development. Whether
          working independently or <br /> collaborating with a team, I embrace
          every project as an opportunity to learn, grow, and deliver
          exceptional value. Let’s connect and bring your vision to life with a
          blend of creativity and technical expertise. Together, <br /> we can build
          something extraordinary!
        </p>
      </div>
    </div>
  );
};

export default About;
