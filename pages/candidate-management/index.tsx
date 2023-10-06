import { NextPage } from "next";
import React from "react";
import Banner from "../../components/Banner";
import { Layout } from "../../components/layout";

const candidateManagement: NextPage = () => {

  return (
    <Layout title="Profile">
      <Banner title="Candidate Management" />
      <div className="flex flex-col items-center justify-center mt-[2%] pl-3 pr-3">
        <table className="w-full border-collapse border border-blue-500">
        <thead>
            <tr className="bg-blue-500 text-white">
                <th className="border border-blue-500 p-2">S/N</th>
                <th className="border border-blue-500 p-2">Candidate Wallet Address</th>
                <th className="border border-blue-500 p-2">Referrer Feedback Score</th>
                <th className="border border-blue-500 p-2">Attached Profile Link</th>
                <th className="border border-blue-500 p-2">Contact Candidate</th>
                <th className="border border-blue-500 p-2">Reject Candidate</th>
                <th className="border border-blue-500 p-2">Hire Candidate</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">1</td>
                <td className="border border-blue-500 p-2">0x56f…ad49</td>
                <td className="border border-blue-500 p-2">5</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">2</td>
                <td className="border border-blue-500 p-2">0x39j…ke43</td>
                <td className="border border-blue-500 p-2">5</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">3</td>
                <td className="border border-blue-500 p-2">0x83m…jd82</td>
                <td className="border border-blue-500 p-2">4</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">4</td>
                <td className="border border-blue-500 p-2">0x49x…jd28</td>
                <td className="border border-blue-500 p-2">4</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">5</td>
                <td className="border border-blue-500 p-2">0x82z…le92
                </td>
                <td className="border border-blue-500 p-2">3</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">6</td>
                <td className="border border-blue-500 p-2">0x01p…hq71
                </td>
                <td className="border border-blue-500 p-2">3</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">7</td>
                <td className="border border-blue-500 p-2">0x45b…hz79
                </td>
                <td className="border border-blue-500 p-2">3</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">8</td>
                <td className="border border-blue-500 p-2">0x82x…nk18
                </td>
                <td className="border border-blue-500 p-2">5</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            </tr>            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">9</td>
                <td className="border border-blue-500 p-2">0x71m…hi54
                </td>
                <td className="border border-blue-500 p-2">2</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">10</td>
                <td className="border border-blue-500 p-2">0x90z…ji87
                </td>
                <td className="border border-blue-500 p-2">1</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">11</td>
                <td className="border border-blue-500 p-2">0x77n…lo17
                </td>
                <td className="border border-blue-500 p-2">5</td>
                <td className="border border-blue-500 p-2">
                    <a href="#" className="text-blue-500 hover:underline">View Profile</a>
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
        </tbody>
    </table>
      </div>
    </Layout>
  );
};

export default candidateManagement;

