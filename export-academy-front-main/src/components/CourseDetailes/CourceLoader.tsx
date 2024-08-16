import { Box, Skeleton } from "@mui/material"

const CourceLoader = () => {
  return (
             <Box sx={{ pt: 0.5,display:'flex',flexDirection:'column',gap:'6px' }} >
            <Skeleton variant="rectangular"  height={190} />
              <Skeleton width="100%" />
              <Skeleton width="80%" />
              <Skeleton width="60%" />
              <Skeleton width="100%" />
              <div className="border-t-2">
              <Skeleton height={50}/>
              </div>
            </Box>
  )
}

export default CourceLoader