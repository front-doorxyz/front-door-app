import InlineApply from '@/components/JobComponents/InlineApplyJob';
import JobOverview from '@/components/JobComponents/JobOverview';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { Address } from 'wagmi';
import Description from '@/components/JobComponents/Description';
import ReferJob from '@/components/JobComponents/ReferJob';
import { Layout } from '@/components/layout';
import usePolybase from '@/hooks/usePolybase';
import { getSummaryItems } from '@/helpers';
import ReactLoading from 'react-loading';

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
        <div className='flex h-[100vh] w-full items-center justify-center'>
          <ReactLoading
            type='bubbles'
            color='#0080FB'
            height={'30%'}
            width={'15%'}
          />
        </div>
      )}
    </>
  );
};

export default JobInfo;
