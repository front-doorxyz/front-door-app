import React, { useState } from "react";
import TextEditor from "../TextEditor";

type Props = {};

const AddJob = (props: Props) => {
  return (
    <div className="shadow-2xl flex flex-col justify-center gap-4 p-4">
      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary">Location</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="location"
        />
      </label>
      <label className="join flex flex-col gap-2 mb-[-2%]">
        <span className="indicator-item badge badge-primary">
          Job Description
        </span>
      </label>
      <TextEditor readOnly={false} initialValue={""} />
      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary">Role Title</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="roleTitle"
        />
      </label>

      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary"> Bounty</span>
        <input
          type="number"
          step="any"
          min="0"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="bounty"
        />
      </label>

      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary"> Max Salary</span>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="maxSalary"
        />
      </label>
      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary">Min Salary</span>
        <input
          type="number"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="minSalary"
        />
      </label>
      <label className="join flex flex-col gap-2">
        <span className="indicator-item badge badge-primary">Type of job</span>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[50vw]"
          name="type"
        />
      </label>
      <button className={`btn btn-primary`}>Add Job</button>
    </div>
  );
};

export default AddJob;
