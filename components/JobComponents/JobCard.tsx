import Image from 'next/image';
import { useRouter } from 'next/router';
import { jobProps } from '../../types';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import StarRating from '../StarRating';

const JobCard = ({
  id,
  roleTitle,
  location,
  description = '',
  companyName,
  bounty,
}: jobProps) => {
  const router = useRouter();

  return (
    <div className=' h-[360px] w-[300px] cursor-pointer rounded-lg bg-white px-5 py-5 shadow-md '>
      <div className='flex flex-col justify-start'>
        <div className='flex justify-between mb-4'>
          <div className='relative flex h-14 w-14 overflow-hidden rounded-md shadow-sm'>
            <Image
              alt='Company logo'
              className='cursor-pointer'
              fill
              src={`https://picsum.photos/id/${Math.pow(
                parseInt(id),
                3
              )}/200/200`}
            />
          </div>
          <Badge className='self-start bg-[#5F9FFF]'>
            {'Bounty: ' + '$' + Math.floor(100 + Math.random() * 900)}
          </Badge>
        </div>

        <h1 className='mb-0 font-bold text-gray-900 text-lg'>{roleTitle}</h1>
        <p className='mb-1 mt-0 text-sm text-gray-700'>{companyName}</p>
        <div className='mb-3 w-20'>
          <StarRating score={4.5} color='#ffa41c' />
        </div>

        <div className='mb-5 h-[60px]'>
          <p className='line-clamp-3 text-sm text-gray-400'>{description}</p>
        </div>

        <div className='mb-7 flex justify-start gap-2'>
          <Badge className='bg-[#3F3F5F]'>
            <div className=' truncate'>{location}</div>
          </Badge>
          <Badge className='bg-[#3F3F5F]'>
            <div className='truncate'>Mid Level</div>
          </Badge>
          <Badge className='bg-[#3F3F5F]'>
            <div className='truncate'>English</div>
          </Badge>
        </div>
        <Button
          onClick={() => router.push(`/job/${id}`)}
          className='bg-[#3F007F]'
        >
          See more
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
