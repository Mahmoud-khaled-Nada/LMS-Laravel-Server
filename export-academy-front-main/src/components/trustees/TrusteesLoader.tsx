import { Skeleton } from "@mui/material"

const TrusteesLoader = () => {
  return (
    <div className="flex flex-col gap-2 items-center">
      
         <Skeleton animation="wave" variant="circular" width={150} height={150} />
         <Skeleton  width={100}  />
         <Skeleton   width={200}  />     
        <Skeleton  width={100}  />
    </div>
  )
}

export default TrusteesLoader