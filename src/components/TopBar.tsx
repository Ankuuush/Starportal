import SearchBox from "./SearchBox";
import tvIcon from "../assets/images/tvIcon.svg";
const TopBar = () => {
  return (
    <div className="2xl:h-16 h-14 w-screen bg-black text-white flex justify-center items-center">
      <div className="w-3/4 xl:w-2/3 flex items-center justify-between">
        <p className="text-2xl 2xl:text-3xl">intract.</p>
        <div className="flex w-2/5 justify-around text-sm 2xl:text-base">
          <p>Compass</p>
          <p>Explore</p>
          <p className="flex gap-x-2 items-center">Academy<p className="bg-[#6435E9] px-1 2xl:px-2 flex items-center h-5 rounded-lg text-xs">New</p></p>
          <p>NFTs</p>
          <p>For Projects</p>
        </div>
        <div className="w-1/2 flex justify-between items-center gap-x-3">
          <SearchBox />
          <img src={tvIcon} />
          <button className="bg-white text-black w-16 xl:w-24 h-8 text-center rounded-md text-sm xl:text-base">
            Sign In
          </button>
        </div>
      </div>
    </div>
    
  );
};

export default TopBar;
