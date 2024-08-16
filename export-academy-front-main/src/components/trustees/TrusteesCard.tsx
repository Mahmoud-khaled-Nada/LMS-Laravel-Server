import { FC } from "react"
import { trustee } from "../../types/trustee"

const TrusteesCard:FC<trustee> = ({name,title,image,description,imageSize}) => {
  return (
    <div className="flex flex-col gap-2 items-center">
      <div > 
      <img src={image} style={{width:imageSize,height:imageSize,borderRadius:'300px'}} className={`  border-2 border-Secondary`}/>
      </div>
         
          <h3 className="text-md text-Secondary font-semibold">{title}</h3>
          <h2 className="text-lg text-primary font-semibold">{name}</h2>
          <p className="text-sm text-primary font-semibold text-center">{description}</p>
    </div>
  )
}

export default TrusteesCard