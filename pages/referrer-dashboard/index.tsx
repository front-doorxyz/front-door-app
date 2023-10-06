import { NextPage } from "next";
import React from "react";
import Banner from "../../components/Banner";
import { Layout } from "../../components/layout";

const referrer: NextPage = () => {

  return (
    <Layout title="Profile">
      <Banner title="Client Communication Log" />
      <div className="flex flex-col items-center justify-center mt-[2%] pl-3 pr-3">
        <table className="w-full border-collapse border border-blue-500">
        <thead>
            <tr className="bg-blue-500 text-white">
                <th className="border border-blue-500 p-2">S/N</th>
                <th className="border border-blue-500 p-2">Wallet address of candidates contacted by Clients</th>
                <th className="border border-blue-500 p-2">Role</th>
                <th className="border border-blue-500 p-2">Client</th>
                <th className="border border-blue-500 p-2">Contact Date</th>
                <th className="border border-blue-500 p-2">Candidate Start date</th>
                <th className="border border-blue-500 p-2">Probation End date</th>
                <th className="border border-blue-500 p-2">Rejection date</th>
                <th className="border border-blue-500 p-2">Funds received</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">1</td>
                <td className="border border-blue-500 p-2">0x56f…ad49</td>
                <td className="border border-blue-500 p-2">Java Developer</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">2</td>
                <td className="border border-blue-500 p-2">0x39j…ke43</td>
                <td className="border border-blue-500 p-2">Java Developer</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">3</td>
                <td className="border border-blue-500 p-2">0x83m…jd82</td>
                <td className="border border-blue-500 p-2">Java Developer</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">4</td>
                <td className="border border-blue-500 p-2">0x49x…jd28</td>
                <td className="border border-blue-500 p-2">C++ Developer</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">5</td>
                <td className="border border-blue-500 p-2">0x82z…le92</td>
                <td className="border border-blue-500 p-2">C++ Developer</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">6</td>
                <td className="border border-blue-500 p-2">0x56f…ad49</td>
                <td className="border border-blue-500 p-2">Java Developer</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>        
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">7</td>
                <td className="border border-blue-500 p-2">0x01p…hq71</td>
                <td className="border border-blue-500 p-2">Python Developer</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">8</td>
                <td className="border border-blue-500 p-2">0x45b…hz79</td>
                <td className="border border-blue-500 p-2">Python Developer</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>        
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">9</td>
                <td className="border border-blue-500 p-2">0x82x…nk18</td>
                <td className="border border-blue-500 p-2">CMO</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>
            <tr className="bg-blue-200">
                <td className="border border-blue-500 p-2">10</td>
                <td className="border border-blue-500 p-2">0x71m…hi54</td>
                <td className="border border-blue-500 p-2">CFO</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>         
            <tr className="bg-blue-100">
                <td className="border border-blue-500 p-2">11</td>
                <td className="border border-blue-500 p-2">0x90z…ji87</td>
                <td className="border border-blue-500 p-2">CFO</td>
                <td className="border border-blue-500 p-2">
                A
                </td>
                <td className="border border-blue-500 p-2">
                13/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/03/2023
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                18/06/2023                
                </td>
                <td className="border border-blue-500 p-2">
                2350 USD – 100%
                </td>
            </tr>
        </tbody>
    </table>
      </div>
    </Layout>
  );
};

export default referrer;

