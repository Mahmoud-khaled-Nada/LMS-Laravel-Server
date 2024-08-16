function Committees() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center  gap-8 my-10">
      <div className="flex flex-col gap-6">
        <h1 className="text-[25px] font-semibold">
          Forming 4 committees from the board members.
        </h1>
        <div>
          <span className="text-Secondary text-[20px] font-semibold mr-2 ">
            Curriculum and Action Plan Committee:
          </span>
          <span className="text-[18px] text-Primary font-normal">
            Responsible for determining the curricula to be offered by the
            academy and developing a long-term action plan.
          </span>
        </div>
        <div>
          <span className="text-Secondary text-[18px] font-semibold mr-2 ">
            Strategic Committee:
          </span>
          <span className="text-[18px] text-Primary font-normal">
            responsible for preparing a comprehensive strategy for the academy.
          </span>
        </div>
        <div>
          <span className="text-Secondary text-[18px] font-semibold mr-2 ">
            Finance and Sustainability Committee:
          </span>
          <span className="text-[18px] text-Primary font-normal">
            Responsible for finding funding sources for the academy and
            partnering with new funders to achieve sustainability for the
            academy.
          </span>
        </div>
        <div>
          <span className="text-Secondary text-[18px] font-semibold mr-2 ">
            The headquarters committee :
          </span>
          <span className="text-[18px] text-Primary font-normal">
            is responsible for securing a permanent location for the academy
            instead of its current temporary location to expand the academy's
            activities locally and regionally.
          </span>
        </div>

        <div>
          <h1 className="text-[25px] font-semibold">
            The current headquarters is equipped as follows:
          </h1>
          <ul className="list-disc">
            <li className="text-[18px] text-Primary font-normal">
              Office spaces.
            </li>
            <li className="text-[18px] text-Primary font-normal">
              3 modern fully equipped training rooms ready for virtual training.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src="/images/boardMembers.jpg" />
      </div>
    </div>
  );
}

export default Committees;
