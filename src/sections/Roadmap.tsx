import path1 from "../assets/images/path1.svg";
import path2 from "../assets/images/path2.svg";
import path3 from "../assets/images/path3.svg";
import path4 from "../assets/images/path4.svg";
import path5 from "../assets/images/path5.svg";
import path6 from "../assets/images/path6.svg";
import path7 from "../assets/images/path7.svg";
import path8 from "../assets/images/path8.svg";
import path7Icon from "../assets/images/path7Icon.svg";
import RoadmapCard from "../components/RoadmapCard";
import catImg from "../assets/images/catImg.png";
import RoadmapImgCard from "../components/RoadmapImgCard";
import RoadmapImg1 from "../assets/images/RoadmapImg1.png";
import RoadmapImg2 from "../assets/images/RoadmapImg2.png";
import Card1 from "../assets/images/Card1.png";
import Card2 from "../assets/images/Card2.png";
import Card3 from "../assets/images/Card3.png";
import Card4 from "../assets/images/Card4.png";
import Card5 from "../assets/images/Card5.png";
import Card6 from "../assets/images/Card6.png";
import Dateimg from "../assets/images/Dateimg.png";
import Timer from "../assets/images/Timer.svg";
import RoadmapGif from "../assets/images/RoadmapGif.gif";
import discord from "../assets/images/discordIcon.svg";
import tickImg from "../assets/images/tick.svg";
import rightArrow from "../assets/images/rightArrow.svg";
import infoIcon from "../assets/images/info.svg";

const Roadmap = () => {
  const roadmapdata1 = {
    img: RoadmapImg1,
    heading: "Basics of Crypto",
    text: "The safest and easiest place to start your crypto journey!",
    coins: "1490",
    data: [
      {
        img: Card1,
        tasks: 11,
        title: "But what is crypto and...",
      },
      {
        img: Card6,
        tasks: 8,
        title: "Setting up your own web3...",
      },
      {
        img: Card3,
        tasks: 8,
        title: "What the heck is a...",
      },
      {
        img: Card4,
        tasks: 10,
        title: "Swapping and bridging...",
      },
      {
        img: Card5,
        tasks: 6,
        title: "NFTs and why they are cool...",
      },
      {
        img: Card2,
        tasks: 8,
        title: "Doimg quests and winning...",
      },
    ],
  };
  const roadmapdata2 = {
    img: RoadmapImg2,
    heading: "Introduction to Airdrops",
    text: "Your best bet to make it big in crypto!",
    coins: "1040",
    data: [
      {
        img: Card2,
        tasks: 7,
        title: "What are airdrops, and ho...",
      },
      {
        img: Card4,
        tasks: 10,
        title: "Types of airdrops",
      },
      {
        img: Card5,
        tasks: 11,
        title: "How to earn huge $$$ fro...",
      },
      {
        img: Card1,
        tasks: 10,
        title: "Things to keep in mind!",
      },
    ],
  };
  return (
    <div className="bg-[#080808]  w-full h-fit flex flex-col pb-[25rem] border-b-[#131313] border-b-2 ">
      <div className=" relative w-full h-fit flex flex-col pl-40 pr-20 text-white">
        <div className="h-fit flex w-[35%] absolute 2xl:-top-32">
          <img src={path1} className="w-1/4 h-fit mt-20" />
          <RoadmapCard data={roadmapdata1} />
        </div>
        <div className="flex mt-10 h-fit">
          <div className=" ml-[20%]">
            <img src={path2} />
          </div>
          <RoadmapImgCard
            img={catImg}
            heading="Intract Certified: Learner NFT"
            text="Your crypto black-belt certificate"
            style="w-[10%] mt-14 2xl:mt-0"
          />
          <div className=" flex items-end">
            <img src={path3} />
          </div>
        </div>
      </div>
      <div className=" relative w-full h-fit flex flex-col pr-20 pl-20 text-white">
        <div className="w-full flex justify-end">
          <img src={path4} className="w-[45%]" />
        </div>
        <div className="flex flex-row-reverse w-full h-fit">
          <div className=" w-1/2 2xl:w-[35%] mr-[20%] 2xl:mr-[30%]">
            <RoadmapCard data={roadmapdata2} />
          </div>
          <div className=" ">
            <img src={path5} />
          </div>
          <RoadmapImgCard
            img={catImg}
            heading="Intract Certified: Learner NFT"
            text="Your crypto black-belt certificate"
            style=" w-28 2xl:w-40 mt-[15rem]"
          />
          <div className=" flex justify-end items-end">
            <img src={path6} />
          </div>
        </div>
      </div>
      <div className=" relative w-full h-fit flex flex-col pr-20 pl-20 text-white">
        <div className="relative w-1/2">
          <img src={path7} />
          <div className="absolute flex flex-col items-center right-[30%] top-1">
            <img src={path7Icon} />
            <p className="text-xl mt-4">
              10,000 <span className="text-[#4C9641]">$PEPE</span>
            </p>
            <p className="text-sm text-[#434343]">Memecoin Airdrop</p>
          </div>
        </div>
        <div className="relative flex flex-row-reverse mr-20  2xl:mr-72">


          <div className="relative">
            <div className="2xl:h-80 2xl:w-80 w-60 h-60 bg-[#131313] p-2 2xl:p-3 rounded-lg text-[#737373]">
              <div className="flex h-[10%] gap-x-2 items-center pb-1 2xl:pb-2">
                <p className=" text-xs 2xl:text-sm">Reward info</p>{" "}
                <img src={infoIcon} className="2xl:h-4 h-3" />
              </div>
              <hr className="border-[#2E2E2E]" />
              <p className="2xl:py-3 py-1 text-xs 2xl:text-sm font-semibold text-white">
                Free access to paid KOL (crypto earning) communities!
              </p>
              <p className="py-1 text-xs 2xl:text-sm font-semibold">
                Win access to exclusive earning communities of some of the the
                greatest earners in crypto for a month, every 24 hours. Get
                access to unmatched insights, a close-knit community of the best
                airdrop earners, and more.
              </p>
              <p className="2xl:py-1 text-xs 2xl:text-sm font-semibold">
                To win: make sure you've connected your Twitter and Discord
                accounts - and follow our criteria!
              </p>
            </div>
            <img src={path8} className="absolute -left-20" />
          </div>

          <div className="w-1/4 absolute right-[20rem] 2xl:right-[25rem] h-fit flex flex-col gap-y-10 -top-10">
            <div className="flex flex-col justify-between w-full h-32 2xl:h-40 bg-[#1C1C1C] rounded-xl p-3">
              <div className="flex gap-x-2">
                <img src={Timer} />
                <p className="t2xl:text-base text-sm">Reward unlocks in</p>
              </div>
              <hr className="border-[#2E2E2E]" />
              <img src={Dateimg} />
            </div>
            <div className="flex 2xl:text-base text-sm flex-col w-full h-fit bg-[#1C1C1C] rounded-xl p-3 text-[#737373]">
              <img src={RoadmapGif} className="w-full" />
              <div className=" flex justify-between py-2">
                <p>Exclusive Community</p>
                <div className="flex items-center gap-x-1">
                  <img
                    src={discord}
                    className="p-[0.15rem] rounded-full w-4 h-4 bg-[#5865F2]"
                  />{" "}
                  <p className="text-white">Earndrop</p>
                </div>
              </div>
              <hr className="border-[#2E2E2E]" />
              <div className="flex justify-between py-2">
                <p className="2xl:text-sm text-xs">Complete all Essential quests</p>
                <div className=" p-[0.1rem] bg-[#545252] h-4 w-4 rounded-full border-[#434343] border-[1px]">
                  <img src={tickImg} />
                </div>
              </div>
              <div className="flex justify-between pb-2">
                <p className="2xl:text-sm text-xs">
                  Complete at least 1 Alpha Hub quest today
                </p>
                <div className=" p-[0.1rem] bg-[#545252] h-4 w-4 rounded-full border-[#434343] border-[1px]">
                  <img src={tickImg} />
                </div>
              </div>
              <div className="flex 2xl:h-10 h-8 2xl:text-base text-sm bg-[#252525] rounded-lg justify-center items-center gap-x-2 text-white">
                <p>Claim now</p>
                <img src={rightArrow} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
