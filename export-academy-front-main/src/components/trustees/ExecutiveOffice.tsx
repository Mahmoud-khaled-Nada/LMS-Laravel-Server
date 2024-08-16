import OfficeCard from "./OfficeCard"

const ExecutiveOffice = () => {
    const Offices=[
        {
            title:"لجنة المناهج وخطة العمل ",
            image: "/images/Export-academy-banner-scaled.jpg",
            description:"وهي المنوطة بتحديد المناهج التي ستقدمها الأكاديمية وإعداد خطة عمل طويلة المدي."
        },
        {
            title:"لجنة المناهج وخطة العمل ",
            image: "/images/Export-academy-banner-scaled.jpg",
            description:"وهي المنوطة بتحديد المناهج التي ستقدمها الأكاديمية وإعداد خطة عمل طويلة المدي."
        },
        {
            title:"لجنة المناهج وخطة العمل ",
            image: "/images/Export-academy-banner-scaled.jpg",
            description:"وهي المنوطة بتحديد المناهج التي ستقدمها الأكاديمية وإعداد خطة عمل طويلة المدي."
        },
        {
            title:"لجنة المناهج وخطة العمل ",
            image: "/images/Export-academy-banner-scaled.jpg",
            description:"وهي المنوطة بتحديد المناهج التي ستقدمها الأكاديمية وإعداد خطة عمل طويلة المدي."
        },
    ]
  return (
    <div className="my-20 ">
        <div className="flex flex-col gap-8 items-center">
            <h4 className="text-3xl font-bold text-Primary">المكتب التنفيذي</h4>
            <div className="flex flex-col gap-2 items-center">
            <p className="text-md font-bold text-Primary"> رئيس مجلس الأمناء - السيد الأستاذ / محمد قاسم  </p>
            <p className="text-md font-bold text-Primary"> نائب رئيس مجلس الأمناء - السيدة الأستاذة / ماري كامل  </p>
            <p className="text-md font-bold text-Primary"> الأمين العام - السيد الأستاذ/ أحمد عز الدين</p>
            <p className="text-md font-bold text-Primary"> أمين الصندوق - السيد الدكتور/ حاتم سعد قابيل  </p>

            </div>

        </div>
        <div className="mt-20  flex flex-col gap-12">
            <h2 className="text-3xl text-Primary text-center">تشكيل 4 لجان من أعضاء مجلس الأمناء</h2>
             <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
             {Offices.map((office)=>(
                <OfficeCard {...office}/>
             ))} 
             </div>
          
        </div>
    </div>
  )
}

export default ExecutiveOffice