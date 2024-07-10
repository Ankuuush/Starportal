import videoIcon from "../assets/images/videoIcon.svg";

type Prop = {
  img: string;
  text: string;
};

const ProjectsCard = ({ item }: { item: Prop }) => {
  return (
    <div className="relative rounded-2xl">
      <img
        src={item.img}
        className="w-full h-full object-cover rounded-2xl"
        alt="Item"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-xl" />
      <img
        src={videoIcon}
        className="absolute top-3 right-3"
        alt="Video Icon"
      />
      <p className="absolute bottom-3 left-3 text-white 2xl:text-2xl text-lg">
        {item.text}
      </p>
    </div>
  );
};

export default ProjectsCard;
