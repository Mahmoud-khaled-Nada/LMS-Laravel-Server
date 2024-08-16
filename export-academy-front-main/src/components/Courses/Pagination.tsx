import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function CoursePagination() {
  return (
    <Stack
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        my: "20px",
      }}
    >
      <Pagination
        style={{direction:'ltr'}}
        count={20}
        className="custom-pagination" 
       
      />
    </Stack>
  );
}
