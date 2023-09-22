import React from "react";
import { useRouter } from "next/router";
import StarRating from "../StarRating";

type jobProps = {
  id: string;
  roleTitle: string;
  location: string;
  minSalary: number;
  bounty: string;
  maxSalary: number;
  companyName: string;
};

const Job = ({
  id,
  roleTitle,
  location,
  minSalary,
  bounty,
  maxSalary,
  companyName,
}: jobProps) => {
  return (
    <div
      id={id}
      className="shadow-xl w-[300px] h-[200px] md:w-[450px] md:h-[300px]  dark:text-white rounded-2xl transition-all duration-300">
      <div className="flex flex-col justify-between h-[100%]">
        <div className="bg-accent h-[20%] rounded-t-2xl flex items-center justify-center  gap-2">
          <div className="flex items-center gap-2 ml-[2%] ">
            <div className="text-sm md:text-xl">{companyName}</div>
            <StarRating score={4.5} />
          </div>
        </div>
        <div className="p-2 h-[60%]">
          <div className="flex flex-col gap-2 text-sm md:text-lg">
            <div>Role Title: {roleTitle}</div>
            <div>Location: {location}</div>
            <div>Bounty: {bounty}</div>
            <div>
              Salary Range: {minSalary}-{maxSalary}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center h-[20%] gap-4">
          <button
            className="px-8 py-2 bg-blue-500 text-sm md:text-lg  text-white rounded"
            // onClick={handleJobClick}
          >
            Refer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
