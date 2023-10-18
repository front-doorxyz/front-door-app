import React from 'react';
import {
  FireIcon,
  LinkIcon,
  ClockIcon,
  LanguageIcon,
  ShoppingBagIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  BanknotesIcon,
} from '@heroicons/react/24/outline';
import TextEditor from '../TextEditor';
import { jobProps } from '../../types';
import { Badge } from '../ui/badge';

const Description = ({
  roleTitle,
  description,
  location,
  salary,
  bounty,
  experience,
  languageSpoken,
}: jobProps) => {
  const skills = ['React', 'Python', 'Nodejs', 'Golang', 'Solidity'];
  return (
    <div className='flex flex-col items-start gap-4'>
      <div className='flex w-full items-center justify-between'>
        <Badge className='text-md gap-2 bg-[#ED7014]'>
          <FireIcon className='h-6' />
          Hot Position
        </Badge>
        <div className='flex items-center justify-center gap-4'>
          <LinkIcon className='h-6 w-6' />
        </div>
      </div>
      <div className='text-3xl font-semibold uppercase tracking-wide text-black'>
        {roleTitle}
      </div>
      <div className='flex w-full items-center gap-4 border-b-2 pb-4'>
        <Badge className='self-start bg-[#5F9FFF]'>
          {'Bounty: ' + '$' + Math.floor(100 + Math.random() * 900)}
        </Badge>
        {/* <Bag>Bounty - {bounty}</Bag> */}
      </div>
      <div className='flex w-full flex-col'>
        <TextEditor readOnly initialValue={description} title='Description' />
      </div>
      <div className='flex w-full flex-col border-b-2 pb-4'>
        <div className='bg-white text-xl font-semibold uppercase text-black'>
          Required Skills
        </div>
        <div className='mt-[2%] flex w-full flex-wrap gap-4'>
          {skills.map((skill) => (
            <div key={skill} className='bg-[#5F9FFF] p-2 text-white'>
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className='flex w-full flex-col'>
        <div className='bg-white text-xl font-semibold uppercase text-black'>
          Job Details
        </div>
        <div className='mt-[1%] grid grid-cols-2 grid-rows-1 gap-6  text-white'>
          <div className='flex  items-center gap-2 bg-[#3F3F5F] p-2'>
            <ClockIcon className='h-6' />
            {experience}
          </div>
          <div className='flex  items-center gap-2 bg-[#3F3F5F] p-2'>
            <LanguageIcon className='h-6' />
            {languageSpoken}
          </div>
          <div className='flex  items-center gap-2 bg-[#3F3F5F] p-2'>
            <BuildingOfficeIcon className='h-6' />
            {location}
          </div>
          <div className='flex  items-center gap-2 bg-[#3F3F5F] p-2'>
            <BanknotesIcon className='h-6' />
            {salary} + benefits
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
