import { formatDaysAgo } from '@/lib/utils';
import { JobProps } from '@/types';
import Image from 'next/image';
import StarRating from '../StarRating';
import TextEditor from '../TextEditor';

const Description = ({
  id,
  roleTitle,
  description,
  location,
  salary,
  bounty,
  companyName,
  experience,
  date,
  company,
}: JobProps) => {
  return (
    <div className='mb-24'>
      <div className='relative mb-16 flex h-[250px] w-full md:h-[300px]'>
        <Image
          alt='Company logo'
          className='mb-10 cursor-pointer object-cover'
          fill
          src={
            company.logoUrl
              ? company.logoUrl
              : `https://picsum.photos/id/1/1600/900`
          }
        />
        <div className=' absolute -bottom-12 left-6 flex h-24 w-24 overflow-hidden rounded-lg border-4 border-white shadow-sm md:left-12'>
          {company.logoUrl ? (
            <Image
              alt='Company logo'
              className='cursor-pointer'
              fill
              src={company.logoUrl}
            />
          ) : (
            <div className='bacground-pattern'></div>
          )}
        </div>
      </div>
      <div className='mx-6 md:mx-12'>
        <div className='mb-12 grid md:grid-cols-2'>
          <div>
            <h1 className='mb-0 text-xl font-bold text-gray-900'>
              {roleTitle}
            </h1>
            <p className='mb-1 mt-0 text-sm text-gray-600'>{companyName}</p>
            <div className='flex items-center gap-3'>
              <span className='rounded bg-yellow-400 px-2 py-1 text-xs text-white'>
                4.5
              </span>{' '}
              <div className='w-15'>
                <StarRating score={4.5} color='#f7cd53' />
              </div>
            </div>
          </div>
          <div className='self-end text-right'>
            <div>Bounty: ${bounty}</div>
            <div className='text-sm text-gray-600'>
              {date ? (
                <>
                  Posted
                  <span className='font-semibold'>
                    {' ' + formatDaysAgo(date)}
                  </span>
                </>
              ) : (
                '...'
              )}
            </div>
          </div>
        </div>
        <div className='mb-12 grid w-full grid-cols-4 justify-center rounded-md border border-gray-200'>
          <div className='width-full col-span-4 border-b border-gray-200 py-4 text-center lg:col-span-1 lg:border-b-0 lg:border-r'>
            <div className='text-gray-600'>Experience</div>
            <div className='text-sm font-semibold text-gray-900'>
              {experience ? experience : '...'}
            </div>
          </div>
          <div className='width-full col-span-4 border-b border-gray-200 py-4 text-center lg:col-span-1 lg:border-b-0  lg:border-r'>
            <div className='text-sm text-gray-600'>Work Level</div>
            <div className='font-semibold text-gray-900'>{'...'}</div>
          </div>
          <div className='width-full col-span-4 border-b border-gray-200 py-4 text-center lg:col-span-1  lg:border-b-0 lg:border-r'>
            <div className='text-sm text-gray-600'>Location</div>
            <div className='font-semibold text-gray-900'>
              {location ? location : '...'}
            </div>
          </div>
          <div className='width-full col-span-4 border-b border-gray-200 py-4 text-center lg:col-span-1 lg:border-b-0  lg:border-r'>
            <div className='text-sm text-gray-600'>Offer Salary</div>
            <div className='font-semibold text-gray-900'>
              {' '}
              {salary ? salary + ' + benefits' : '...'}{' '}
            </div>
          </div>
        </div>
      </div>
      <div className='mx-6 md:mx-12'>
        <div className='text-gray-900'>
          <TextEditor readOnly initialValue={description} title='Description' />
        </div>
      </div>
    </div>
  );
};

export default Description;
