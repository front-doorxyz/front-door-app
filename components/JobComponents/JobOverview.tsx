import React from 'react';
import { Badge } from '../ui/badge';

export type JobOverview = {
  skills: string[];
  summary: Record<string, SummaryItem>;
};

type SummaryItem = {
  displayName: string;
  value: string;
  icon: React.ReactNode;
};

const JobOverview = ({ skills, summary }: JobOverview) => {
  return (
    <>
      <div className='text-xl font-semibold md:mb-6'>Job Overview</div>
      <div className='mb-8 flex flex-col gap-6'>
        {Object.entries(summary).map(([_, item]) =>
          item.value ? (
            <div key={item.displayName} className='flex items-center gap-4'>
              <div className=' rounded-full bg-[#e7defd] p-3'>{item.icon}</div>
              <div>
                <div className='font-semibold text-gray-900'>
                  {item.displayName}
                </div>
                <div className='text-gray-600'>{item.value}</div>
              </div>
            </div>
          ) : null
        )}
      </div>
      {skills.length ? (
        <div className='flex flex-wrap justify-start gap-2'>
          {skills.map((skill) => (
            <Badge key={skill} className='bg-[#3F3F5F]'>
              <div>{skill}</div>
            </Badge>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default JobOverview;
