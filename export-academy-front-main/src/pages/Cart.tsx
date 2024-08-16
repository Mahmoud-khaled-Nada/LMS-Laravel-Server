import MainSection from "../components/cart/MainSection"
import CardCart from "../components/cart/CardCart";
import { courses } from "@/components/Courses/db";



const Cart = () => {
  return (
    <div>
        <MainSection/>
        <div className="w-11/12 lg:w-3/4 mx-auto flex flex-col lg:flex-row gap-8 my-12">
             <div className="lg:w-3/4">
                   <div className="font-bold text-lg">2 Courses in Cart</div>
                  <div className="flex flex-col gap-3">
                  {courses.map((course)=>(
                      <CardCart {...course}/>
                   ))}
                  </div>
                   
             </div>
             <div className="lg:w-1/4 flex flex-col gap-1">
                 <div className="text-lg font-semibold text-Secondary">Total:</div>
                 <div className="text-3xl font-bold text-primary">E£499.98</div>
                 <p className="text-[#585D69] font-outfit  font-normal font-sans text-[15px] line-through	">
                    E£1,299.98
                  </p>
                  <p className="text-primary font-outfit  font-normal font-sans text-[15px] 	">
                    62% off
                  </p>
                  <button
                  className="flex gap-2 items-center text-center justify-center py-[10px] mt-4 text-[16px] font-sans font-semibold rounded-md bg-Primary text-white hover:bg-blue-200 hover:text-Primary transition delay-30 duration-300 ease-in-out"
               
                >
                  <p>Checkout</p>
                  
                </button>
             </div>
        </div>
        
    </div>
  )
}

export default Cart