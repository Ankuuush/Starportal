import homeGIF from "../assets/images/home.gif";
import rightArrow from "../assets/images/rightArrow.svg";

const Home = () => {
  return (
    <div className="bg-homeImg flex justify-center h-[93vh] w-full bg-cover text-white">
      <div className="flex w-fit h-fit flex-col mt-56 justify-center items-center">
        <img src={homeGIF} className="w-60 h-24 bg-transparent" />
        <p className="mt-10 text-xl">Intract users <span className="text-[#70707A]">have together made more than </span>$100 million <span className="text-[#70707A]">in web3.</span></p>
        <p className="text-xl"><span className="text-[#70707A]">Join them and</span> learn how to earn crypto!</p>
        <button className="flex items-center gap-x-2 px-12 py-2 rounded-xl bg-[#6435E9] text-sm mt-10">Get Started <img src={rightArrow} /></button>
      </div>
    </div>
    
  );
};

export default Home;
