import Description from '@/components/JobComponents/Description';
import InlineApply from '@/components/JobComponents/InlineApplyJob';
import JobOverview from '@/components/JobComponents/JobOverview';
import ReferJob from '@/components/JobComponents/ReferJob';
import { Layout } from '@/components/layout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { JobItem } from '@/db/entities/job';
import { getSummaryItems } from '@/helpers';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import ReactLoading from 'react-loading';

const JobInfo: NextPage = () => {
  const router = useRouter();

  const [jobId, setJobId] = useState<string>('');
  const [refId, setRefId] = useState<string>();
  const [refCode, setRefCode] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [jobInfo, setJobInfo] = useState<JobItem>();
  const [refDialogOpen, setRefDialogOpen] = useState<boolean>(false);
  const [companyInfo, setCompanyInfo] = useState<any>({});

  const getJobListingById = async (jobId: string) => {
    const res = await fetch('../api/jobs/' + jobId);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('bad response');
    }
  };

  const handleDialogClose = () => {
    if (refDialogOpen) {
      setRefDialogOpen(false);
    }
  };

  useEffect(() => {
    let { id, refId, refCode } = router.query;
    id = Array.isArray(id) ? id[0] : id;
    refId = Array.isArray(refId) ? refId[0] : refId;
    refCode = Array.isArray(refCode) ? refCode[0] : refCode;

    if (id) {
      setJobId(id);

      if (refId && refCode) {
        setRefId(refId);
        setRefCode(refCode);
        setRefDialogOpen(true);
      }

      getJobListingById(id)
        .then((jobListing) => {
          setJobInfo(jobListing.item);
          setCompanyInfo({ name: jobListing.name });
        })
        .catch((error) => {
          //  Handle the error appropriately
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [router]);

  return (
    <>
      {!loading ? (
        <Layout title='job-info'>
          {refId && refCode ? (
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
                      ? (jobInfo?.skills ?? '').split(',')
                      : []
                  }
                  summary={getSummaryItems(jobInfo)}
                />
              </aside>
              <div className='flex flex-col flex-wrap gap-4'>
                {refId && refCode ? (
                  <div className=' rounded-lg bg-white p-3 shadow-sm md:p-7'>
                    <InlineApply
                      referalId={refId}
                      jobId={jobId}
                      refCode={refCode}
                    />
                  </div>
                ) : null}
                <div className=' rounded-lg bg-white px-3 pb-3 pt-2 shadow-sm md:p-7'>
                  <ReferJob jobId={jobId} />
                </div>
              </div>
            </div>
          </div>

          {refId && refCode ? (
            <Dialog open={refDialogOpen} onOpenChange={handleDialogClose}>
              <DialogContent className='sm:max-w-[425px]'>
                <InlineApply
                  jobId={jobId}
                  referalId={refId}
                  refCode={refCode}
                />
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
