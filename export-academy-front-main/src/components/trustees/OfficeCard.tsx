import { FC } from "react"
import { office } from "../../types/trustee"

const OfficeCard:FC<office> = ({description,image,title}) => {
  return (
    <div className="border border-gray-300 px-4  shadow-sm hover:shadow-md animat  hover:border-blue-400  transition-all duration-300 rounded-md py-12 flex flex-col gap-6 items-center">
         <div className="w-24 h-24 flex justify-center items-center border-4 rounded-full p-1 border-Secondary">
             <img src={image} />
         </div>
         <h4 className="text-center text-lg font-bold text-Primary" >{title}</h4>
         <p className="text-center text-xl text-gray-600">{description}</p>
    </div>
  )
}

export default OfficeCard