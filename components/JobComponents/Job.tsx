import React, { useState } from "react";
import { useRouter } from "next/router";
import StarRating from "../StarRating";
import { jobProps } from "../../types";

const Job = ({
  id,
  roleTitle,
  location,
  description = "",
  companyName,
}: jobProps) => {
  const router = useRouter();
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div
      id={id}
      className="bg-blue-50 shadow-lg rounded-lg p-4 hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 cursor-pointer"
      style={{
        maxWidth: "300px",
      }}
    >
      <div
        className="bg-blue-500 text-slate-100 py-3 rounded-t-lg"
        style={{ fontSize: "1rem", fontWeight: "bold", textAlign: "left",  padding: "10px 10px"}}
      >
        <span
          className="font-bold text-lg"
          style={{
            textTransform: "uppercase",
            fontSize: "0.9rem",
          }}
        >
          {companyName}
        </span>
        <StarRating score={4.5} color="gold" />
      </div>
      <div className="p-4 flex flex-col">
        <div className="font-bold text-lg text-black-500" style={{ textTransform: "uppercase", marginBottom: "5px" }}>
          {roleTitle}
        </div>
        <div className="font-bold text-sm mt-1 text-black-500">
          {location}
        </div>
        <div className="text-sm" style={{ color: "#007BFF", cursor: "pointer" }} onClick={toggleDescription}>
          {showDescription ? "Hide JD" : "Job Description"}
        </div>
        <div
          className="text-black-500 text-sm mb-4"
          style={{ maxHeight: showDescription ? "none" : "60px", overflow: "hidden", display: showDescription ? "block" : "none" }}
        >
          {description}
        </div>
      </div>
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 rounded-lg bg-purple-950 text-white text-sm hover:bg-purple-800 transition-colors duration-300"
          style={{ cursor: "pointer" }}
          onClick={() => router.push(`/job/${id}`)}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Job;
