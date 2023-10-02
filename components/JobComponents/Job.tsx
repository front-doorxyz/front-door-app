import React from "react";
import { useRouter } from "next/router";
import StarRating from "../StarRating";
import { truncateDescription } from "../../helpers";
import { jobProps } from "../../types";

const Job = ({
  id,
  roleTitle,
  location,
  description = "",
  companyName,
}: jobProps) => {
  const router = useRouter();
  return (
    <div
      id={id}
      className="shadow-xl w-[300px] h-[200px] md:w-[450px] md:h-[300px] rounded-2xl transition-all duration-300">
      <div className="flex flex-col justify-between h-[100%]">
        <div className="bg-[#3F3F5F] text-white h-[20%] rounded-t-2xl flex items-center justify-around gap-2 border-b-2">
          <div className="flex  gap-2 ml-[2%] ">
            <div className="text-sm md:text-xl ">{companyName}</div>
          </div>
          <StarRating score={4.5} color="white" />
        </div>
        <div className="p-2 h-[60%]">
          <div className="flex flex-col gap-4 text-sm md:text-lg">
            <div className="flex w-full items-center justify-between border-b-2 ">
              <div className="uppercase">{roleTitle}</div>
              <div className="flex items-center ">{location}</div>
            </div>
            <div className="flex flex-col w-full justify-center">
              <div className="">{truncateDescription(description, 24)}</div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="flex items-center justify-end h-[20%] gap-4 mr-[2%]">
          <button
            className="px-6 py-2 rounded-[5px] bg-[#3F007F] text-sm md:text-md  text-white"
            onClick={() => router.push(`/job/${id}`)}>
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
