import web3Img from "../assets/images/web3Img.png";
import dictionaryImg from "../assets/images/dictionaryImg.png";

const Dictionary = () => {
  return (
    <div className="w-full bg-[#080808] flex flex-col justify-center items-center pt-14 pb-40">
      <div className="text-white mb-8 w-fit">
        <p className="2xl:text-2xl text-lg text-center">Crypto Dictionary</p>
        <p className="text-center text-xs 2xl:text-sm font-semibold pt-2 text-[#6C6C6C]">
          Your one-stop to catch up on all crypto terms
        </p>
      </div>
      <div className="relative rounded-2xl w-[70%]">
        <img
          src={web3Img}
          className="w-full h-full object-cover rounded-2xl"
          alt="Item"
        />
        <div className="absolute bottom-5 left-5 ">
          <p className="text-lg 2xl:text-2xl text-[#AEB7B6] font-semibold">
            Web3 + Degen Glossary
          </p>
          <p className="text-[#898F8A] text-sm 2xl:text-base">Your own crypto dictionary</p>
        </div>
        <img src={dictionaryImg} className="absolute w-10 h-10 2xl:w-14 2xl:h-14 bottom-5 right-5" />
      </div>
    </div>
  );
};

export default Dictionary;
