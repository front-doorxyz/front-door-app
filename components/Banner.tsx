import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
type Props = {
  title: string;
  subtitle?: string;
  navigation?: boolean;
};

const Banner = ({ title, navigation, subtitle }: Props) => {
  const router = useRouter();
  return (
    <div className="flex  justify-around bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-[15vh] w-full text-white">
      {navigation && (
        <div
          className="flex items-center gap-4 h-[4vh]"
          onClick={() => router.back()}>
          <ArrowLeftIcon className="h-4" />
          Back
        </div>
      )}
      <div className="flex flex-col items-center justify-center h-full gap-2">
        <div className="text-2xl uppercase">{title}</div>
        <div>{subtitle}</div>
      </div>
    </div>
  );
};

export default Banner;
