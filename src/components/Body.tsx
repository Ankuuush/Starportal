import Dictionary from "../sections/Dictionary";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Roadmap from "../sections/Roadmap";

const Body = () => {
  return (
    <div className="w-full relative overflow-x-hidden">
      <div className="fixed text-white bottom-8 left-[50%] flex translate-x-[-50%] w-[18%] z-10 2xl:h-10 h-8 bg-[#141414] rounded-full">
        <div className="w-1/2 2xl:text-base text-sm bg-[#393939] h-full rounded-full flex justify-center items-center">Essentials</div>
        <div className="w-1/2 2xl:text-base text-sm text-[#727272] flex justify-center items-center h-full">Alpha Hub</div>
      </div>
      <Home />
      <Roadmap />
      <Projects />
      <Dictionary />
    </div>
  );
};

export default Body;
