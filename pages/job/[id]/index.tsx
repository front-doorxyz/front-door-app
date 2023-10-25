import InlineApply from '@/components/JobComponents/InlineApplyJob';
import JobOverview from '@/components/JobComponents/JobOverview';
import { Dialog, DialogContent } from '@/components/ui/dialog';
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
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { Address } from 'wagmi';
import Description from '@/components/JobComponents/Description';
import ReferJob from '@/components/JobComponents/ReferJob';
import { Layout } from '@/components/layout';
import usePolybase from '@/hooks/usePolybase';

const JobInfo: NextPage = () => {
  const router = useRouter();
  const { readCompanyById, readJobListingById } = usePolybase();
  const [jobId, setJobId] = useState<string>('');
  const [refId, setRefId] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);
  const [jobInfo, setJobInfo] = useState<any>();
  const [refDialogOpen, setRefDialogOpen] = useState<boolean>(false);
  const [companyInfo, setCompanyInfo] = useState<any>({});

  useEffect(() => {
    const { id, refId }: any = router.query || {};

    if (!!id) {
      const jobId = String(id);
      setJobId(jobId);

      if (refId) {
        setRefId(String(refId));
        setRefDialogOpen(true);
      }

      readJobListingById(jobId)
        .then((jobListing) => {
          setJobInfo(jobListing);
          return getCompanyData(jobListing.owner);
        })
        .catch((error) => {
          //  Handle the error appropriately
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [router]);

  const getCompanyData = async (address: Address) => {
    const data = await readCompanyById(address);
    setCompanyInfo(data);
    return data;
  };

  const handleDialogClose = () => {
    if (refDialogOpen) {
      setRefDialogOpen(false);
    }
  };

  const getSummaryItems = (jobInfo: any) => {
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
      },
    };

    for (const [key, value] of Object.entries(jobInfo)) {
      if (wantedKeys[key as keyof JobProps]) {
        wantedKeys[key as keyof JobProps].value = value;
      }
    }
    return wantedKeys;
  };

  return (
    <>
      {!loading ? (
        <Layout title='job-info'>
          {refId ? (
            <ConfettiExplosion
              className='absolute right-1/2'
              zIndex={60}
              duration={4000}
              particleCount={300}
              width={1200}
            />
          ) : null}
          <div className='lg:grid-c-1fr-auto grid gap-4 px-2 pt-3 md:container  md:pt-14'>
            <div className='overflow-hidden rounded-lg bg-white shadow-sm'>
              <Description id={jobId} {...jobInfo} company={companyInfo} />
            </div>
            <div className='flex flex-col flex-wrap gap-4 '>
              <aside className='flex flex-col rounded-lg bg-white p-3 shadow-sm md:px-8 md:py-6'>
                <JobOverview
                  skills={
                    jobInfo?.skills ?? '' !== ''
                      ? jobInfo.skills.split(',')
                      : []
                  }
                  summary={getSummaryItems(jobInfo)}
                />
              </aside>
              <div className='flex flex-col flex-wrap gap-4'>
                {refId ? (
                  <div className=' rounded-lg bg-white p-3 shadow-sm md:p-7'>
                    <InlineApply referalId={refId} jobId={jobId} />
                  </div>
                ) : null}
                <div className=' rounded-lg bg-white px-3 pb-3 pt-2 shadow-sm md:p-7'>
                  <ReferJob jobId={jobId} />
                </div>
              </div>
            </div>
          </div>

          {refId ? (
            <Dialog open={refDialogOpen} onOpenChange={handleDialogClose}>
              <DialogContent className='sm:max-w-[425px]'>
                <InlineApply jobId={jobId} referalId={refId} />
              </DialogContent>
            </Dialog>
          ) : null}
        </Layout>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default JobInfo;
