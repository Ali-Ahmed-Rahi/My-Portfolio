
import { FaPhoneAlt } from 'react-icons/fa';
import { IoArrowBackCircleOutline } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { HashLink } from 'react-router-hash-link';

const ContactMe = () => {
  return (
    <div className='mt-8'>
      <div className='mb-5'>
      <HashLink smooth to='/' className="text-4xl text-white">
        <IoArrowBackCircleOutline />
        </HashLink>
      </div>
      <div className=" text-black">
      
      <div
        data-aos="zoom-in-up"
        className="text-center h-64 lg:h-96 py-16 lg:py-8 bg-black text-white border  "
      >
        <h2 data-aos="zoom-in-up" className="text-3xl lg:text-5xl font-bold">
          Contact Me
        </h2>
        <p data-aos="zoom-in-up" className="font-medium lg:text-2xl mt-4">
        I would love to hear from you, here is
        <br />how you can reach me
        </p>
      </div>

      <div className=" flex-col md:flex-row lg:flex justify-evenly lg:-translate-y-28 text-white">
        <div data-aos="zoom-in-up" className="bg-black  mt-3 lg:w-1/3 border">
          <div className="text-center py-5 lg:py-20 px-8">
          <MdEmail className="mx-auto text-3xl lg:text-5xl" />
            <h2 className=" lg:text-2xl font-medium mt-5">Talk To Me</h2>
            <p className="lg:text-xl mt-5">
              If you Intersted In My Project & Experience?<br /> Just Pickup  Your Phone to
              Chat With Me.
            </p>
            <p className="text-xl mt-5">
              Email: <span className="text-blue-600">aliahmedrahi44@gmail.com</span>
            </p>
          </div>
        </div>

        <div data-aos="zoom-in-up" className="bg-black mt-3 lg:w-1/3 border">
          <div className="text-center py-5 lg:py-20 px-8">
            <FaPhoneAlt className="mx-auto text-4xl lg:text-5xl"></FaPhoneAlt>
            <h2 className="lg:text-2xl font-medium mt-5">Get Support</h2>
            <p className="lg:text-xl mt-5">
            If you Intersted In My Project & Experience?<br /> Just Pickup Your Phone to
            Direct Call in My Phone 
            </p>
            <p className="text-xl mt-5">
              Phone : <span className="text-blue-600">+8801942432047</span>
            </p>
          </div>
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default ContactMe;