import { truncateDescription } from '@/helpers';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { JobProps } from '../../types';
import StarRating from '../StarRating';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

const JobCard = ({
  id,
  roleTitle,
  location,
  description = '',
  companyName,
  bounty,
}: Partial<JobProps>) => {
  const router = useRouter();

  return (
    <div className=' h-[360px] w-[300px] cursor-pointer rounded-lg bg-white px-5 py-5 shadow-md '>
      <div className='flex flex-col justify-start'>
        <div className='mb-4 flex justify-between'>
          <div className='relative flex h-14 w-14 overflow-hidden rounded-md shadow-sm'>
            <div className='bacground-pattern'></div>
          </div>
          <Badge className='self-start bg-[#5F9FFF]'>
            {'Bounty: ' + '$' + Math.floor(100 + Math.random() * 900)}
          </Badge>
        </div>

        <h1 className='mb-0 text-lg font-bold text-gray-900'>{roleTitle}</h1>
        <p className='mb-1 mt-0 text-sm text-gray-700'>{companyName}</p>
        <div className='mb-3 w-20'>
          <StarRating score={4.5} color='#f7cd53' />
        </div>

        <div className='mb-5 h-[60px]'>
          <p className='line-clamp-3 text-sm text-gray-400'>
            {truncateDescription(description, 20)}
          </p>
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
