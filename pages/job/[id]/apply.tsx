import Banner from '@/components/Banner';
import * as eth from '@polybase/eth';
import { Layout } from '@/components/layout';
import usePolybase from '@/hooks/usePolybase';
import { recruitmentABI, recruitmentAddress } from '@/src/generated';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useAccount, useContractWrite } from 'wagmi';
import { Button } from '@/components/ui/button';
import JobOverview from '@/components/JobComponents/JobOverview';
import { getSummaryItems } from '@/helpers';
import ReactLoading from 'react-loading';

const Apply = () => {
  const router = useRouter();
  const [jobId, setJobId] = useState<string>('');
  const [refId, setRefId] = useState<string>();
  const [jobInfo, setJobInfo] = useState<any>();
  const [loading, setLoading] = useState<boolean>(true);
  const { address }: any = useAccount();
  const [candidateApplication, setCandidateApplication] = useState<any>({
    cvLink: '',
    location: '',
    noticePeriod: '',
    preferredSalary: '',
    description: '',
  });

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

  const {
    checkCandidateRegistration,
    applyforJob,
    readJobListingById,
    registerJobApplication,
  } = usePolybase(async (data: string) => {
    const sig = await eth.sign(data, address);
    return { h: 'eth-personal-sign', sig };
  });

  useEffect(() => {
    const { id, refId }: any = router.query || {};

    if (!!id) {
      const jobId = String(id);
      setJobId(jobId);

      if (refId) {
        setRefId(String(refId));
      }

      readJobListingById(jobId)
        .then((jobListing) => {
          setJobInfo(jobListing);
        })
        .catch((error) => {
          //  Handle the error appropriately
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [router]);

  const {
    data: confirmData,
    isLoading: confirmLoading,
    isSuccess: confirmSuccess,
    writeAsync: confirmReferral,
  } = useContractWrite({
    abi: recruitmentABI,
    address: recruitmentAddress,
    functionName: 'confirmReferral',
  });

  const confirmReferralSC = async () => {
    let candidateExists: boolean;
    try {
      candidateExists = await checkCandidateRegistration(address);
    } catch (e) {
      candidateExists = false;
    }
    if (!candidateExists) {
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
            args: [BigInt(refId), BigInt(jobId)],
          });
        } catch (e) {
          toast.error('Candidate Application Failed');
        }
      }
    }
  };

  const jobApplicationPolybase = async () => {
    const jobApplicationData = [
      String(refId),
      String(jobId),
      candidateApplication.cvLink,
      candidateApplication.location,
      candidateApplication.noticePeriod,
      candidateApplication.preferredSalary,
      candidateApplication.description,
    ];

    const jobApplication = await registerJobApplication(jobApplicationData);
    const applyData = await applyforJob(String(jobId), address);
    if (jobApplication.id && applyData.id) {
      toast.success(`Applied For Job Successfully!`);
      router.push('/');
    }
  };

  useEffect(() => {
    if (confirmSuccess) {
      jobApplicationPolybase();
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
                    disabled={confirmLoading}
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
                      ? jobInfo.skills.split(',')
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
