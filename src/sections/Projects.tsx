import ProjectsCard from '../components/ProjectsCard'

const Projects = () => {

    const data=[
        {
            img:"https://static.highongrowth.xyz/enterprise/undefined/c7caa8a1de0d45f4acd7c51d145df808.png",
            text:"How to plan your retirement with crypto?"
        },
        {
            img:"https://static.highongrowth.xyz/enterprise/undefined/58615645160e4aab89da48d9f62cedf8.png",
            text:"Why are there limited Bitcoin?"
        },
        {
            img:"https://static.highongrowth.xyz/enterprise/undefined/493018d95dd24096a4badafe9390eea7.png",
            text:"How does Uniswap actually work?"
        },
        {
            img:"https://static.highongrowth.xyz/enterprise/undefined/a9e03cd73a494e09864475c36318c03b.png",
            text:"How to spot crypto projects to invest in?"
        }
    ]
  return (
    <div className="w-full bg-[#080808] flex flex-col justify-center items-center py-14">
        <div className="text-white mb-8 w-fit">
            <p className="2xl:text-2xl text-lg">Top Crypto Creators and Projects to Follow</p>
            <p className="text-center 2xl:text-sm text-xs font-semibold pt-2 text-[#6C6C6C]">Answers to your crypto doubts, straight from the experts</p>
        </div>
    <div className="flex w-[70%] gap-4 ">
      {data.map((item) => {
        return (<ProjectsCard item={item} /> );
    })}
  </div>
  </div>
  )
}

export default Projects