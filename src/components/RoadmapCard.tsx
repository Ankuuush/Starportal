import { useState } from "react";
import coin from "../assets/images/coin.svg";
import tickImg from "../assets/images/tick.svg";

type CardProp = {
  img: string;
  tasks: number;
  title: string;
};

type RoadmapData = {
  img: string;
  heading: string;
  text: string;
  coins: string;
  data: CardProp[];
};

type Props = {
  data: RoadmapData;
};

const Card = ({ data, id }: { data: CardProp; id: number }) => {
  return (
    <div className="flex w-full h-12 xl:h-16  2xl:h-24 bg-[#1C1C1C] rounded-xl p-2">
      <img src={data.img} className="w-1/4 h-full" />
      <div className="pl-4 w-full pr-4 flex flex-col justify-between ">
        <p className=" text-xs 2xl:text-lg font-semibold text-[#D3D3D3]">
          #{id+1}:{data.title}
        </p>
        <hr className="border-[#2E2E2E]" />
        <div className="flex items-center w-full">
          <p className="flex text-xs 2xl:text-base whitespace-nowrap pr-1 xl:pr-2 text-[#A6A6A6]">
            {data.tasks} Tasks
          </p>{" "}
          <div className="bg-[#2E2E2E] rounded-full border-2 border-[#2F2F2F] w-full h-2 2xl:h-4" />
        </div>
      </div>
      <div className="w-[10%] h-full flex items-end">
        <div className=" p-1 bg-[#545252] h-4 w-4 2xl:h-6 2xl:w-6 rounded-full border-[#434343] border-[1px]">
          <img src={tickImg} />
        </div>
      </div>
    </div>
  );
};
const RoadmapCard: React.FC<Props> = ({ data }) => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-fit h-fit">
      <div
        onClick={() => setOpen(!open)}
        className="w-full hover:cursor-pointer h-20 xl:h-36 2xl:h-60 bg-[#131313] flex items-center p-3 2xl:p-6  hover:bg-[#333232] rounded-3xl text-white"
      >
        <img src={data.img} className="h-full w-[35%] " />
        <div className="w-3/5 h-full flex flex-col justify-between py-1 xl:py-2 2xl:py-4 pl-4">
          <p className="text-sm xl:text-base  2xl:text-2xl">{data.heading}</p>
          <p className=" text-xs font-semibold text-[#848384]">{data.text}</p>
          <hr className=" border-[#848384]" />
          <div className="flex text-xs 2xl:text-sm">
            <img src={coin} />
            <p>{data.coins} XPs</p>
          </div>
        </div>
      </div>
      {open && (
        <div className="w-full h-52 xl:h-64 2xl:h-80 overflow-y-hidden hover:overflow-y-scroll gap-2 bg-[#101010] flex items-center p-6 rounded-3xl flex-col">
          {data.data.map((item, idx) => {
            return <Card data={item} key={idx} id={idx} />;
          })}
        </div>
      )}
    </div>
  );
};

export default RoadmapCard;
