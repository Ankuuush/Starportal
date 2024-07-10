import twitterIcon from "../assets/images/twitterIcon.svg";
import spotifyIcon from "../assets/images/spotifyIcon.svg";
import discordIcon from "../assets/images/discordIcon.svg";
import telegramIcon from "../assets/images/telegramIcon.svg";

const Footer = () => {
  return (
    <div className="w-screen h-fit bg-black flex justify-center items-center">
      <div className=" w-[70%] flex flex-col pt-12">
        <div className="w-full text-[#7D7D7D] h-fit grid grid-cols-[30%,15%,15%,20%,20%] border-b-[1px] border-b-[#2B2B2B] pb-10">
          <div className="gap-y-2 flex flex-col">
            <p className="text-white text-lg 2xl:text-2xl">intract.</p>
            <p className="text-sm 2xl:text-base">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </p>
          </div>
          <div className="gap-y-1 flex flex-col">
            <p className="text-white text-sm 2xl:text-base">INTRACT</p>
            <p className="text-sm 2xl:text-base">Explore Quests</p>
            <p className="text-sm 2xl:text-base">Comunities</p>
            <p className="text-sm 2xl:text-base">Alpha Hub</p>
          </div>
          <div className="gap-y-1 flex flex-col">
            <p className="text-white text-sm 2xl:text-base">EARN</p>
            <p className="text-sm 2xl:text-base">Refer & Earn</p>
            <p className="text-sm 2xl:text-base">Leaderboard</p>
            <p className="text-sm 2xl:text-base">Achievements</p>
          </div>
          <div className="gap-y-1 flex flex-col">
            <p className="text-white text-sm 2xl:text-base">About</p>
            <p className="text-sm 2xl:text-base">Product Roadmap</p>
            <p className="text-sm 2xl:text-base">Affiliate Program</p>
            <p className="text-sm 2xl:text-base">Sign up Program</p>
            <p className="text-sm 2xl:text-base">Growth Community</p>
            <p className="text-sm 2xl:text-base">Blogs</p>
          </div>
          <div className="gap-y-1 flex flex-col">
            <p className="text-white text-sm 2xl:text-base">Support</p>
            <p className="text-sm 2xl:text-base">Help Center</p>
            <p className="text-sm 2xl:text-base">Create your quest</p>
            <p className="text-sm 2xl:text-base">Terms of Service</p>
            <p className="text-sm 2xl:text-base">Privacy Policy</p>
            <p className="text-sm 2xl:text-base">Community Guidelines</p>
          </div>
        </div>
        <p className="h-fit 2xl:text-base text-sm py-8 2xl:py-10 text-[#7D7D7D] border-b-[1px] border-b-[#2B2B2B]">
          <span className="text-[#BFBFBF]">Disclaimer: </span>Crypto Products,
          Virtual Digital Assets, and NFTs are unregulated and can be highly
          risky. There may be no regulatory recourse for any loss from such
          transactions. We advise the viewer to proceed with caution. Nothing in
          this website or any communication published by us amounts to, is
          intended to be, or should be construed as investment or purchase
          advice of any kind or financial advice or promotion under any
          applicable laws. Any decision made based on the content provided on
          this website or any communication published by us shall not be
          attributable to us.
        </p>
        <div className="2xl:h-20 h-16 flex 2xl:pt-16 pt-12 2xl:pb-12 pb-8 items-center pr-4 justify-between">
          <p className="text-white 2xl:text-sm text-xs">
            CREATED BY <span className=" underline">INTRACT</span>
          </p>
          <div className="flex gap-3">
            <img
              src={twitterIcon}
              className=" p-2 2xl:h-10 h-8 bg-[#1A1A1A] rounded-lg"
            />
            <img
              src={discordIcon}
              className="p-2 2xl:h-10 h-8 bg-[#1A1A1A] rounded-lg"
            />
            <img
              src={telegramIcon}
              className="p-2 2xl:h-10 h-8 bg-[#1A1A1A] rounded-lg"
            />
            <img
              src={spotifyIcon}
              className="p-2 2xl:h-10 h-8 bg-[#1A1A1A] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
