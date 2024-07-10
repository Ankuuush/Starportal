type Props = {
  img: string;
  heading: string;
  text: string;
  style:string
};
import tickImg from "../assets/images/tick.svg";
import lockIcon from "../assets/images/lockIcon.svg";

const RoadmapImgCard: React.FC<Props> = ({ img, heading, text, style }) => {
  return (
    <div className={`flex flex-col ${style}`} >
      <div className="w-full flex justify-center">
        <div className=" w-6 h-6 2xl:w-10 2xl:h-10 p-1 2xl:p-2 mb-4 bg-[#131313] rounded-full border-[#434343] border-[1px]">
          <img src={tickImg} className="w-full h-full" />
        </div>
      </div>
      <div className=" relative p-1 border-[#434343] border-[1px] rounded-3xl">
        <img src={img} />
        <div className=" w-6 h-6 2xl:w-10 2xl:h-10 absolute -bottom-2 -right-2 2xl:-bottom-3 2xl:-right-3 p-1 2xl:p-3 bg-[#131313] rounded-full border-[#434343] border-[1px]">
          <img src={lockIcon} />
        </div>
      </div>
      <p className=" text-sm 2xl:text-base whitespace-nowrap mt-4">{heading}</p>
      <p className="text-xs 2xl:text-sm text-[#434343] font-semibold">{text}</p>
      <p className="w-full text-center text-xs 2xl:text-lg py-1 2xl:py-2 bg-[#434343] mt-2 rounded-lg">Claim</p>
    </div>
  );
};

export default RoadmapImgCard;
