import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const headerLinks=[
    // {name:"Home",link:"/"},
    // {name:"Courses",link:"/"},
    // {name:"Board of Trustees",link:"/"},
    {name:"About",link:"/about"},
    {name:"Contact Us",link:"/contact"},
    {name:"Privacy Policy",link:"/privacy"},
    {name:"Terms and Conditions",link:"/terms"},
]
const Courses=[
  {name:"Export oriented ",link:"/singleCourse"},
  {name:"trade financing",link:"/singleCourse"},
  {name:"Export ",link:"/singleCourse"},
  {name:"financing",link:"/singleCourse"},
  {name:"trade",link:"/singleCourse"},
]
const gotopWindow=()=>{
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  })
}
  return (
    <div className="relative">
<div className="bg-Primary py-10">
         <div className="w-11/12 sm:w-10/12 lg:w-3/4 mx-auto grid md:grid-cols-3 gap-8">
             <div className="flex flex-col gap-2 items-center md:items-start">
                <h3 className="text-Secondary text-2xl font-semibold">WebSite Map</h3>
                {headerLinks.map((headerLink)=>(
                     <Link to={headerLink.link} className="text-white  text-lg hover:text-Secondary transition-all duration-300">{headerLink.name} </Link>  
                  ))}
             </div>
             <div className="flex flex-col gap-2 items-center md:items-start">
                <h3 className="text-Secondary text-2xl font-semibold">Courses</h3>
                {Courses.map((headerLink)=>(
                     <Link to={headerLink.link} className="text-white  text-lg hover:text-Secondary transition-all duration-300">{headerLink.name} </Link>  
                  ))}
             </div>
             <div className="flex flex-col gap-2 items-center md:items-start">
             <h3 className="text-Secondary text-2xl font-semibold">Map</h3>
             <div ><iframe width="100%" height="160"   src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Road9%20Coworking%20Space+(Road9%20Coworking%20Space)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
             </div>
         </div>
    </div>
    <div className="w-10/12  mx-auto grid grid-cols-5 py-4 gap-y-4">
        <div className="col-span-5 md:col-span-4 flex justify-center md:justify-start"> ©2024 All rights reserved for the Export Academy by 
          <Link to="https://techvillageeg.com/" className="text-Secondary">Techvillage</Link>.
          </div>
        <div className="col-span-5 md:col-span-1 flex gap-2 items-center justify-center md:justify-end"> 
          <p className="font-thin">Contact us</p>
          <Link to="/">
          <FaFacebook className="text-Primary  text-xl hover:text-Secondary transition-all duration-300"/>
          </Link>
          <Link to="/">
          <FaLinkedin className="text-Primary  text-xl hover:text-Secondary transition-all duration-300"/>
          </Link>
        </div> 
       <div onClick={gotopWindow} className="absolute end-3 bottom-3 w-10 h-10 bg-gray-500 text-white hover:bg-Secondary transition-all duration-300 hover:text-Primary flex items-center justify-center cursor-pointer">
        <IoIosArrowUp className="text-xl font-bold"/>
       </div>
    </div>
    </div>
    
  )
}

export default Footer