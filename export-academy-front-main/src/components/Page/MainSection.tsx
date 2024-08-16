import MainHeader from "../common/MainHeader"
type MainSectionProps = {
    header:string,
    desc:string
  };
const MainSection = ({header,desc}:MainSectionProps) => {
  return (
    <MainHeader>
    <div className="py-10 flex flex-col items-center gap-8">
          <h3 className="text-4xl font-bold text-white " >{header}</h3>
          <p className="text-lg text-white ">{desc}</p>
    </div>
</MainHeader>
  )
}

export default MainSection