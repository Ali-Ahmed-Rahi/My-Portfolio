import Ban from "../components/Ban";
import Ab from "../components/Home/Ab";
// import Banner from "../components/Home/Banner";
import Contact from "../components/Home/Contact";
import Experience from "../components/Home/Experience";
import Project from "../components/Home/Project";
import Skills from "../components/Home/Skills";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <Ban></Ban>
      <Ab></Ab>
      <Skills></Skills>
      <Project></Project>
      <Experience></Experience>
      <Contact></Contact>
    </div>
  );
};

export default Home;
