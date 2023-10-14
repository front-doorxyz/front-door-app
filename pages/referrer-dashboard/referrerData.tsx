// components/DataTable.js
import React from "react";

const data = [
  {
    id: 1,
    walletAddress: "0x56f…ad49",
    role: "Java Developer",
    client: "A",
    contactDate: "12/03/2023",
    startDate: "18/03/2023",
    probationEndDate: "18/06/2023",
    rejectionDate: "18/06/2023",
    fundsReceived: "2350 USD – 100%",
  },
  {
    id: 2,
    walletAddress: "0x83m…jd82",
    role: "C# Developer",
    client: "A",
    contactDate: "12/03/2023",
    startDate: "18/03/2023",
    probationEndDate: "18/04/2023",
    rejectionDate: "",
    fundsReceived: "2050 USD – 100%",
  },
  {
    id: 3,
    walletAddress: "0x39j…ke43",
    role: "Java Developer",
    client: "A",
    contactDate: "20/03/2023",
    startDate: "18/03/2023",
    probationEndDate: "19/06/2023",
    rejectionDate: "",
    fundsReceived: "2350 USD – 100%",
  },
  {
    id: 4,
    walletAddress: "0x56f…ad49",
    role: "Java Developer",
    client: "A",
    contactDate: "13/10/2023",
    startDate: "20/10/2023",
    probationEndDate: "18/06/2023",
    rejectionDate: "",
    fundsReceived: "2100 USD – 100%",
  },
  {
    id: 5,
    walletAddress: "0x82z…le92",
    role: "C++ Developer",
    client: "A",
    contactDate: "13/03/2023",
    startDate: "14/03/2023",
    probationEndDate: "14/06/2023",
    rejectionDate: "14/06/2023",
    fundsReceived: "1250 USD – 100%",
  },
];

const ReferrerData = () => {
  return (
    <tbody>
      {data.map((item, index) => (
        <tr key={item.id} className={index % 2 === 0 ? "bg-blue-100" : "bg-blue-200"}>
          <td className="border border-blue-500 p-2">{item.id}</td>
          <td className="border border-blue-500 p-2">{item.walletAddress}</td>
          <td className="border border-blue-500 p-2">{item.role}</td>
          <td className="border border-blue-500 p-2">{item.client}</td>
          <td className="border border-blue-500 p-2">{item.contactDate}</td>
          <td className="border border-blue-500 p-2">{item.startDate}</td>
          <td className="border border-blue-500 p-2">{item.probationEndDate}</td>
          <td className="border border-blue-500 p-2">{item.rejectionDate}</td>
          <td className="border border-blue-500 p-2">{item.fundsReceived}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ReferrerData;


