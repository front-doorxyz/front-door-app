import { useState } from "react";
import { Layout } from "../../components/layout";
import type { NextPage } from "next";
import Banner from "../../components/Banner";
import { useContractWrite } from "wagmi";
import {
  fndrFaucetABI,
  fndrFaucetAddress,
  frontDoorTokenAddress,
} from "../../src/generated";
import { parseEther } from "viem";
import { toast } from "react-toastify";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";

const Faucet: NextPage = () => {
  const [numToMint, setNumToMint] = useState(0);
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  const { data, isLoading, isSuccess, writeAsync } = useContractWrite({
    abi: fndrFaucetABI,
    address: fndrFaucetAddress,
    functionName: "requestTokens",
    args: [parseEther(String(numToMint))],
  });

  const getTokens = async () => {
    try {
      await writeAsync();
      if (isSuccess) {
        toast.success("Tokens added");
      }
    } catch (e) {
      toast.error("Something went wrong! Try again in some time");
    }
  };

  return (
    <>
      <Layout title="Faucet">
        <Banner
          title="Front Door Faucet"
          subtitle="Request tokens for testing the site"
        />
        <div className="flex flex-col items-center justify-center h-full mt-[2%] gap-2">
          <div className="flex flex-col items-start gap-2 ">
            <div className="flex items-center justify-around gap-2 ">
              <span className="text-xl font-medium mr-2 px-2.5 py-0.5 rounded ">
                Front Door token address
              </span>
              <button
                disabled={hasCopiedText}
                className="link"
                onClick={() => copyToClipboard(frontDoorTokenAddress)}>
                {hasCopiedText ? (
                  <CheckIcon className="h-6 mr-[2%]" />
                ) : (
                  <ClipboardIcon className="h-6 mr-[2%]" />
                )}
              </button>
            </div>
            <span className="text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-[#3F007F] text-white shadow-md">
              Amount
            </span>
            <input
              type="text"
              className="input input-bordered h-10 p-3 rounded-md border border-slate-800 w-[200px] md:w-[20vw]"
              value={numToMint}
              onChange={(e) => setNumToMint(Number(e.target.value))}
            />
            <button
              className="btn btn-primary"
              onClick={getTokens}
              disabled={isLoading}>
              Send me tokens
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Faucet;
