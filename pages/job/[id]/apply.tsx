import Banner from '@/components/Banner';
import JobOverview from '@/components/JobComponents/JobOverview';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { JobItem } from '@/db/entities/job';
import { JobApplicationItem } from '@/db/entities/job-application';
import { getSummaryItems } from '@/helpers';
import useCandidate from '@/hooks/useCandidate';
import { useRecruitmentConfirmReferral } from '@/src/generated';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import { useAccount } from 'wagmi';

const Apply = () => {
  const router = useRouter();
  const { address } = useAccount();
  const { isValidating, isRegistered } = useCandidate(address, '../../');
  const {
    isLoading: confirmLoading,
    isSuccess: confirmSuccess,
    writeAsync: confirmReferral,
  } = useRecruitmentConfirmReferral();

  const [jobId, setJobId] = useState<string>('');
  const [refId, setRefId] = useState<string>();
  const [refCode, setRefCode] = useState<string>('');
  const [jobInfo, setJobInfo] = useState<JobItem>();
  const [loading, setLoading] = useState<boolean>(true);
  const [candidateApplication, setCandidateApplication] = useState<any>({
    cvLink: '',
    location: '',
    noticePeriod: '',
    preferredSalary: '',
    description: '',
  });

  const confirmReferralSC = async () => {
    if (!isRegistered) {
      toast.warning('Register as a candidate!');
      router.push(
        {
          pathname: `/register`,
          query: { tab: 3 },
        },
        `/register`
      );
      return;
    } else {
      if (refId) {
        try {
          await confirmReferral({
            args: [BigInt(refId), BigInt(jobId), refCode as `0x${string}`],
          });
        } catch (e) {
          toast.error('Candidate Application Failed');
        }
      }
    }
  };

  const registerApplicationDb = async () => {
    const jobApplicationData = {
      ...candidateApplication,
      referrerId: refId,
      jobId,
      walletAddress: address,
      companyId: jobInfo?.companyId,
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jobApplicationData),
    };

    try {
      const response = await fetch('../../api/applications', options);
      if (response.ok) {
        const responseData = (await response.json()) as {
          items: JobApplicationItem[];
        };
        if (responseData.items.at(0)?.applicationId) {
          toast.success(`Applied For Job Successfully!`);
          router.push('/');
        }
      } else {
        toast.error(`Registration Unsuccessful. Please contact support.`);
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error(`Registration Unsuccessful. Please contact support.`);
    }
  };

  const getJobListingById = async (jobId: string) => {
    const res = await fetch('../../api/jobs/' + jobId);
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('bad response');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let parsedValue = value;

    setCandidateApplication({
      ...candidateApplication,
      [name]: parsedValue,
    });
  };

  useEffect(() => {
    let { id, refId, refCode } = router.query;
    id = Array.isArray(id) ? id[0] : id;
    refId = Array.isArray(refId) ? refId[0] : refId;
    refCode = Array.isArray(refCode) ? refCode[0] : refCode;
    if (id && refId && refCode) {
      setJobId(id);
      setRefId(refId);
      setRefCode(refCode);

      getJobListingById(id)
        .then((jobListing) => {
          setJobInfo(jobListing.item);
        })
        .catch((error) => {
          //  Handle the error appropriately
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [router]);

  useEffect(() => {
    if (confirmSuccess) {
      registerApplicationDb();
    }
  }, [confirmSuccess]);

  return (
    <>
      {!loading ? (
        <Layout title='Profile'>
          <Banner
            title='Job Application'
            subtitle='Complete your application and show your best side'
          />
          <div className='lg:grid-c-1fr-auto grid gap-4 px-2 pt-3 md:container  md:pt-14'>
            <div className='overflow-hidden rounded-lg bg-white shadow-sm'>
              <div className='flex h-[70%] flex-col items-center justify-center'>
                <div className='flex w-[70%] flex-col gap-2'>
                  <input
                    type='text'
                    placeholder='CV Link'
                    className='input input-bordered'
                    name='cvLink'
                    value={candidateApplication.cvLink}
                    onChange={handleChange}
                    required
                  />{' '}
                  <input
                    type='text'
                    placeholder='Location / VISA'
                    className='input input-bordered'
                    name='location'
                    value={candidateApplication.location}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='text'
                    placeholder='Notice Period'
                    className='input input-bordered'
                    name='noticePeriod'
                    value={candidateApplication.noticePeriod}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type='text'
                    placeholder='Preferred Salary'
                    className='input input-bordered'
                    name='preferredSalary'
                    value={candidateApplication.preferredSalary}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    placeholder='What makes you the best candidate for the role?'
                    className='textarea textarea-bordered'
                    name='description'
                    value={candidateApplication.description}
                    onChange={handleChange}
                    required
                  />
                  <Button
                    className='md:text-md w-full rounded-[5px] bg-[#3F007F] px-6 py-2 text-sm  uppercase text-white'
                    disabled={confirmLoading || isValidating}
                    onClick={confirmReferralSC}
                  >
                    Apply
                  </Button>
                </div>
              </div>
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
            </div>
          </div>
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

export default Apply;
