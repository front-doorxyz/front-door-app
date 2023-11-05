import { OptionalKeys } from '@/lib/utils.types';
import { JobProps } from '@/types';
import { LanguageIcon } from '@heroicons/react/24/outline';
import {
  ClockIcon,
  DollarSignIcon,
  GraduationCapIcon,
  MapPinIcon,
  User2Icon,
} from 'lucide-react';
import { TransactionExecutionError } from 'viem';

export const truncateDescription = (text: string, maxWords: number): string => {
  // Regular expression to match words and special characters
  const wordPattern = /[a-zA-Z0-9]+/g;
  const words = text.match(wordPattern); // Find all words and special characters
  if (words && words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }

  return text;
};

export const getDate = () => {
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let date = cDay + '/' + cMonth + '/' + cYear;
  return date;
};

export const checkParams = (...params: any): boolean => {
  for (const param of params) {
    if (!param || typeof param === 'undefined' || Array.isArray(param)) {
      return false;
    }
  }
  return true;
};

export const isValidURL = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
};

export const getSummaryItems = (jobInfo: any) => {
  const wantedKeys: OptionalKeys<JobProps, any> = {
    roleTitle: {
      displayName: 'Job Title',
      value: null,
      icon: <User2Icon className='h-6 text-purple-900' />,
    },
    date: {
      displayName: 'Posted',
      value: null,
      icon: <ClockIcon className='h-6 text-purple-900' />,
    },
    salary: {
      displayName: 'Salary',
      value: null,
      icon: <DollarSignIcon className='h-6 text-purple-900' />,
    },
    experience: {
      displayName: 'Experience',
      value: null,
      icon: <GraduationCapIcon className='h-6 text-purple-900' />,
    },
    langaugeSpoken: {
      displayName: 'Language',
      value: null,
      icon: <LanguageIcon className='h-6 text-purple-900' />,
    },
    location: {
      displayName: 'Location',
      value: null,
      icon: <MapPinIcon className='h-6 text-purple-900' />,
    },
    bounty: {
      displayName: 'Bounty',
      value: null,
      icon: <DollarSignIcon className='h-6 text-purple-900' />,
      prefix: '$',
    },
  };

  for (const [key, value] of Object.entries(jobInfo)) {
    if (wantedKeys[key as keyof JobProps]) {
      wantedKeys[key as keyof JobProps].value = value;
    }
  }
  return wantedKeys;
};

export const isTransactionalError = (
  error: any
): error is TransactionExecutionError =>
  typeof error === 'object' &&
  error !== null &&
  error.name === 'TransactionExecutionError';
