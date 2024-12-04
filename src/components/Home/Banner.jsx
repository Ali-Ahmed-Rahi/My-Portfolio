import { FaArrowRightLong } from 'react-icons/fa6';
import img from '../../assets/20240819_192240-removebg-preview (1).png';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 p-3 lg:p-10 ">
      {/* Text Section */}
      <div className=" lg:w-2/3 text-center lg:text-left py-5 lg:py-24 text-white mx-auto order-2 lg:order-1 lg:px-28 ">
        <h2 data-aos="fade-up" className="text-2xl ">Ali Ahmed Rahi</h2>
        <h3 data-aos="fade-down" className="uppercase text-3xl pt-3">Frontend Developer</h3>
        <p data-aos="fade-up" className="text-lg pt-4">
          I am a frontend developer with expertise in HTML, CSS, JavaScript, and React. <br />
          I specialize in creating responsive, user-friendly web interfaces that deliver seamless user experiences.
        </p>
        <button data-aos="flip-down" ><Link to='/contact' className='btn rounded-full bg-white text-black mt-5 hover:bg-slate-400'>Contact me <FaArrowRightLong /></Link></button>
      </div>
      {/* Image Section */}
      <div className="lg:w-1/3 flex justify-center  mx-auto order-1 lg:order-2 ">
        <img className="w-28 lg:w-96 rounded-full" src={img} alt="Ali Ahmed Rahi" />
      </div>
      
    </div>
  );
};

export default Banner;
