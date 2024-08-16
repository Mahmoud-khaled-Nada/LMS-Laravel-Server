import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { TiPen } from "react-icons/ti";

function Messages() {
  return (
    <div className="bg-[#F4F4F4] py-4 my-10">
      <div className="flex lg:flex-row w-11/12 lg:w-3/4 m-auto flex-col items-center justify-center gap-8 ">
        <div className=" flex flex-col justify-center items-center  text-center  gap-6">
          <VisibilityOutlinedIcon
            sx={{
              fontSize: "48px",
            }}
            className=" text-Secondary"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-[25px] text-Primary font-bold">
              The Academy's Vision
            </h1>
            <p>
              To be a local and regional hub for training and enhancing the
              capabilities of exporters and those interested in foreign trade,
              supporting trainees with necessary information and experiences and
              preparing them to access markets in a sustainable and competitive
              manner in accordance with global trade rules and preferential
              agreements.
            </p>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center text-center gap-6">
          <TiPen className="text-[48px] text-Secondary" />
          <div>
            <div className="flex flex-col gap-4">
              <h1 className="text-[25px] text-Primary font-bold">
                Academy message
              </h1>
              <p>
                Training and qualifying current and potential exporters locally
                and regionally. Enhancing the skills of employees in export
                institutions and all entities involved in export activities,
                whether governmental, private sector, or civil society.
                Providing technical expertise and consultancy to those working
                in the field of export.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;
