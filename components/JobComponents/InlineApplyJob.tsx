import { useRouter } from 'next/router';
import { useAccount } from 'wagmi';
import { Button } from '../ui/button';

type Props = {
  referalId: string;
  jobId: string;
  refCode: string;
};

const InlineApply = ({ referalId, jobId, refCode }: Props) => {
  const router = useRouter();
  const { address }: any = useAccount();
  console.log("jobId inline apply", jobId);
  console.log("refcode inline apply", refCode);
  return (
    <div className='relative'>
      <div className='grid w-full grid-cols-2 text-5xl'>
        <div>🎉</div>
        <div className='content-x-mirror justify-self-end'>🎉</div>
      </div>
      <h1 className='text-center text-xl font-semibold md:mb-6'>
        You have been referred!
      </h1>
      <div className='flex flex-col gap-2'>
        <Button
          className='md:text-md w-full rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  text-white'
          onClick={() => router.push(`${jobId}/apply?refId=${referalId}&refCode=${refCode}`)}
        >
          Apply
        </Button>
      </div>
    </div>
  );
};

export default InlineApply;
