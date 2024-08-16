import { Link } from "react-router-dom"
import MobileDrower from "./MobileDrower";
import Auth from "../../auth/Auth";
import { useDispatch } from "react-redux";
import { changeLogin, changeSignUp } from "../../../store/slices/userSlice";
import LanguageMenu from "./LanguageMenu";
import { useLanguageSelector } from "@/store/slices/languageSlice";
import Search from "./Search";
import { HiOutlineShoppingCart } from "react-icons/hi2";



const Header = () => {
    const dispatch=useDispatch()
    const {translations}=useLanguageSelector((state)=>state.languageReducer)

    const headerLinks=[
        {name:"Home",link:"/"},
        {name:"Courses",link:"/courses"},
        {name:"Board of Trustees",link:"/trustees"},
        {name:"ِAbout",link:"/about"},
        {name:"Contact Us",link:"/contact"},
    ]
    const handleClickOpenLogin = () => {
         dispatch(changeLogin(true));
      };
    
      const handleClickOpenSignUp = () => {
        dispatch(changeSignUp(true));
      };
  return (
    <header className="shadow-lg sticky top-0 bg-white z-50">  
        <div className="w-11/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 mx-auto gap-12 items-center">
            <div className="col-span-1 md:col-span-2">
            <Link to="/" >
            <img src="/images/logo.png" className="max-w-56"/>
            </Link>
            </div>    
            <div className="col-span-5 justify-center  hidden xl:flex">
                <div className="flex gap-8 justify-center items-center">
                    {headerLinks.map((headerLink)=>(
                     <Link to={headerLink.link} className="text-Primary  text-lg hover:text-Secondary transition-all duration-300">{headerLink.name} </Link>  
                    ))}
                </div>
            </div>    
            <div className="col-span-3 lg:col-span-5 xl:col-span-2  gap-3  xl:gap-6 items-center justify-end hidden lg:flex">
                <div className="flex items-center  gap-8">
                    <Link to="/cart">
                    <HiOutlineShoppingCart className="text-2xl font-bold text-Primary mt-1 hover:text-Secondary transition-all ease-in-out"/>
                    </Link>
                    <Search/>
                </div>
                <div className="flex gap-1 items-center">
                <button onClick={handleClickOpenSignUp} className="text-Primary text-nowrap cursor-pointer text-md hover:text-Secondary transition-all duration-300">{translations.SignUp}</button>
                <p>/</p>
                    <button onClick={handleClickOpenLogin} className="text-Primary text-nowrap cursor-pointer text-md hover:text-Secondary transition-all duration-300">{translations.Login}</button>
                    <Auth/>
                </div>
                <LanguageMenu/>
            </div>
            <div className="col-span-1 lg:col-span-2 xl:hidden flex justify-end">
               <MobileDrower/>
            </div>  
        </div>  
    </header>
  )
}

export default Header