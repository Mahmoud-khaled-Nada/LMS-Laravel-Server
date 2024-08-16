import TrusteesCard from "./TrusteesCard"
import TrusteesLoader from "./TrusteesLoader"

const BoardTrustees = () => {
    const boardTrustees=[{
        title:"أمين الصندوق",
        name:"الدكتور/حاتم  سعد قابيل",
        description:"أمين الصندوق",
        image:"/images/Export-academy-banner-scaled.jpg",
    },
    {
        title:"أمين الصندوق",
        name:"الدكتور/حاتم  سعد قابيل",
        description:"أمين الصندوق",
        image:"/images/Export-academy-banner-scaled.jpg",
    },
    {
        title:"أمين الصندوق",
        name:"الدكتور/حاتم  سعد قابيل",
        description:"أمين الصندوق",
        image:"أمين الصندوق",
    },
    {
        title:"أمين الصندوق",
        name:"الدكتور/حاتم  سعد قابيل",
        description:"أمين الصندوق",
        image:"/images/Export-academy-banner-scaled.jpg",
    },
    {
        title:"أمين الصندوق",
        name:"الدكتور/حاتم  سعد قابيل",
        description:"أمين الصندوق",
        image:"أمين الصندوق",
    },
    {
        title:"أمين الصندوق",
        name:"الدكتور/حاتم  سعد قابيل",
        description:"أمين الصندوق",
        image:"/images/Export-academy-banner-scaled.jpg",
    },
    {
        title:"أمين الصندوق",
        name:"الدكتور/حاتم  سعد قابيل",
        description:"أمين الصندوق",
        image:"أمين الصندوق",
    },
    {
        title:"أمين الصندوق",
        name:"الدكتور/حاتم  سعد قابيل",
        description:"أمين الصندوق",
        image:"/images/Export-academy-banner-scaled.jpg",
    }
]
  return (
    <div className="flex flex-col gap-12 my-10">
          <TrusteesCard {...boardTrustees[0]} imageSize="180px"/>
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12">
          {boardTrustees.map((trustee)=>(
            <TrusteesCard {...trustee} imageSize="150px"/>
        ))}
        <TrusteesLoader/>
          </div>
   
    </div>
  )
}

export default BoardTrustees