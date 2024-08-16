import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeLanguage, useLanguageSelector } from "@/store/slices/languageSlice";
import { useEffect } from "react";
function AppLayout() {
  const {lang}=useLanguageSelector((state)=>state.languageReducer)
  const {pathname} =useLocation();
  const dispatch=useDispatch();
  useEffect(()=>{
    const language=localStorage.getItem('lang');
    if(language){
      dispatch(changeLanguage(language))
    }
  },[])
  useEffect(()=>{
    if(lang==='ar')
    document.documentElement.dir = "rtl"
  else
   document.documentElement.dir = "ltr"
  },[lang])
useEffect(()=>{
  window.scrollTo(0, 0);
},[pathname])
  return (
    <div className="font-Cairo text-Primary">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
