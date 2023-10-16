import React from "react";

const data = [
    {
      id: 1,
      walletAddress: "0x56f…ad49",
      feedbackScore: 5,
    },
    {
      id: 2,
      walletAddress: "0x39j…ke43",
      feedbackScore: 5,
    },
    {
      id: 3,
      walletAddress: "0x83m…jd82",
      feedbackScore: 4,
    },
    {
      id: 4,
      walletAddress: "0x49x…jd28",
      feedbackScore: 4,
    },
    {
      id: 5,
      walletAddress: "0x82z…le92",
      feedbackScore: 3,
    },
    {
      id: 6,
      walletAddress: "0x01p…hq71",
      feedbackScore: 3,
    },
    {
      id: 7,
      walletAddress: "0x45b…hz79",
      feedbackScore: 3,
    },
    {
      id: 8,
      walletAddress: "0x82x…nk18",
      feedbackScore: 5,
    },
    {
      id: 9,
      walletAddress: "0x71m…hi54",
      feedbackScore: 2,
    },
    {
      id: 10,
      walletAddress: "0x90z…ji87",
      feedbackScore: 1,
    },
    {
      id: 11,
      walletAddress: "0x77n…lo17",
      feedbackScore: 5,
    },
  ];
  
  
  const CandidateData = () => {

  // return (
    return (
      <tbody>
        {data.map((item, index) => (
      <tr key={item.id}  className={index % 2 === 0 ? "bg-blue-200" : "bg-blue-100"}>
      <td className="border border-blue-500 p-2">{item.id}</td>
      <td className="border border-blue-500 p-2">{item.walletAddress}</td>
      <td className="border border-blue-500 p-2">{item.feedbackScore}</td>
      <td className="border border-blue-500 p-2">
        <a href="#" className="text-blue-500 hover:underline">
          View Profile
        </a>
      </td>
      <td className="border border-blue-500 p-2">
        <button className="bg-blue-500 text-white px-2 py-1 rounded">Contact</button>
      </td>
      <td className="border border-blue-500 p-2">
        <button className="bg-blue-500 text-white px-2 py-1 rounded">Reject</button>
      </td>
      <td className="border border-blue-500 p-2">
        <button className="bg-blue-500 text-white px-2 py-1 rounded">Hire</button>
      </td>
    </tr>
      ))}
      </tbody>
    );
  };

export default CandidateData;
