import MainHeader from "../common/MainHeader"

const Hero = () => {
  return (
    <MainHeader>
          <div className="py-10 flex flex-col items-center gap-8">
                <h3 className="text-4xl font-bold text-white " >مجلس الأمناء</h3>
                <p className="text-lg text-white ">أكاديمية التصدير</p>
          </div>
    </MainHeader>
  )
}

export default Hero