import React from "react";
import {
  FireIcon,
  LinkIcon,
  ClockIcon,
  LanguageIcon,
  ShoppingBagIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  BanknotesIcon,
} from "@heroicons/react/24/outline";
import TextEditor from "../TextEditor";
import { jobProps } from "../../types";

const Description = ({
  roleTitle,
  description,
  location,
  maxSalary,
  minSalary,
  bounty,
}: jobProps) => {
  const skills = ["React", "Python", "Nodejs", "Golang", "Solidity"];
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center justify-between w-full">
        <div className="bg-[#3F3F5F] p-2 gap-2 text-white flex items-center justify-around">
          <FireIcon className="h-4" />
          Hot Position
        </div>
        <div className="flex items-center justify-center gap-4">
          <LinkIcon className="h-6 w-6" />
        </div>
      </div>
      <div className="text-3xl tracking-wide font-semibold uppercase">
        {roleTitle}
      </div>
      <div className="flex items-center w-full gap-4 border-b-2 pb-4">
        <div>Bounty - {bounty}</div>
      </div>
      <div className="flex flex-col w-full">
        <TextEditor readOnly initialValue={description} title="Description" />
      </div>
      <div className="flex flex-col w-full border-b-2 pb-4">
        <div className="bg-white text-xl uppercase font-semibold">
          Required Skills
        </div>
        <div className="flex flex-wrap w-full gap-4 mt-[2%]">
          {skills.map((skill) => (
            <div key={skill} className="bg-[#5F9FFF] text-white p-2">{skill}</div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="bg-white text-xl uppercase font-semibold">
          Job Details
        </div>
        <div className="grid grid-cols-2 grid-rows-1 mt-[1%] gap-6  text-white">
          <div className="flex  items-center gap-2 bg-[#3F3F5F] p-2">
            <ClockIcon className="h-6" />
            Start time
          </div>
          <div className=" flex  items-center gap-2 bg-[#3F3F5F] p-2">
            <ShoppingBagIcon className="h-6" />
            Occupation
          </div>
          <div className="flex  items-center gap-2 bg-[#3F3F5F] p-2">
            <LanguageIcon className="h-6" />
            Langauge
          </div>
          <div className="flex  items-center gap-2 bg-[#3F3F5F] p-2">
            <BuildingOfficeIcon className="h-6" />
            Work Type
          </div>
          <div className="flex  items-center gap-2 bg-[#3F3F5F] p-2">
            <AcademicCapIcon className="h-6" />
            Contract
          </div>
          <div className="flex  items-center gap-2 bg-[#3F3F5F] p-2">
            <BanknotesIcon className="h-6" />${minSalary} - {maxSalary}k +
            benefits
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
