import { Polybase, Signer } from '@polybase/client';
import { Address } from 'wagmi';
const usePolybase = (signer?: Signer) => {
  const dbNameSpace =
    'pk/0xbaeff2028f7c15332ab23549f09c33eee5cb9231559067afe56f975ea6a4b660b1e32eead19b6a8bd48d8347fa3753c8749d43b9a8716905c0fc8a3c70e3e9b1/BFG2';

  const db = new Polybase({
    defaultNamespace: dbNameSpace,
    signer,
  });
  const jobsReference = db.collection('Jobs');
  const referrersReference = db.collection('Referrers');
  const companiesReference = db.collection('Companies');
  const candidatesReference = db.collection('Candidates');
  const jobApplicationsReference = db.collection('JobApplications');

  const registerCandidate = async (candidateData: any) => {
    const recordData = await candidatesReference.create(candidateData);
    return recordData;
  };

  const readJobListingById = async (id: string) => {
    const record = await jobsReference.record(id).get();
    const { data } = record;
    return data;
  };

  const readCandidateData = async () => {
    const records = await candidatesReference.get();
    let candidateList: any = [];
    records.data.map((record) => {
      candidateList.push(record.data);
    });
    return candidateList;
  };

  const readCandidateDataForJob = async (jobId: string) => {
    const jobListing = await readJobListingById(jobId);
    const records = jobListing?.candidates;
    const candidateListForJob: any[] = [];

    await Promise.all(
      records.map(async (record: any) => {
        const candidate = await readCandidateById(record);
        candidateListForJob.push(candidate);
      })
    );

    return candidateListForJob;
  };
  const readCandidateById = async (id: string) => {
    const record = await candidatesReference.record(id).get();
    const { data } = record;
    return data;
  };

  const checkCandidateRegistration = async (id: string) => {
    const record = await candidatesReference.record(id).get();
    const exists = record?.exists() || false;
    return exists;
  };

  const registerReferrer = async (referrerData: any) => {
    const recordData = await referrersReference.create(referrerData);
    return recordData;
  };

  const readReferrerById = async (id: string) => {
    const record = await referrersReference.record(id).get();
    const { data } = record;
    return data;
  };

  const registerCompany = async (companyData: any) => {
    const recordData = await companiesReference.create(companyData);
    return recordData;
  };

  const registerJobApplication = async (jobApplicationData: any) => {
    const recordData =
      await jobApplicationsReference.create(jobApplicationData);
    return recordData;
  };

  const readCompanyById = async (id: string) => {
    const record = await companiesReference.record(id).get();
    const { data } = record;
    return data;
  };

  const createJobListing = async (jobData: any) => {
    const recordData = await jobsReference.create(jobData);
    return recordData;
  };

  const applyforJob = async (jobId: string, candidateId: string) => {
    const recordData = await jobsReference
      .record(jobId)
      .call('applyCandidate', [candidateId]);
    return recordData;
  };

  const checkCompanyRegistration = async (id: string) => {
    const record = await companiesReference.record(id).get();
    const exists = record?.exists() || false;
    return exists;
  };

  const checkReferrerRegistration = async (id: string) => {
    const record = await referrersReference.record(id).get();
    const exists = record?.exists() || false;
    return exists;
  };

  const readAllJobListings = async () => {
    const records = await jobsReference.get();
    let jobListings: any = [];
    records.data.map((record) => {
      jobListings.push(record.data);
    });
    return jobListings;
  };

  const readAllJobListingsForClient = async (address: Address) => {
    const records = await jobsReference.where('owner', '==', address).get();
    let jobListings: any = [];
    records.data.map((record) => {
      jobListings.push(record.data);
    });

    return jobListings;
  };

  const updateJobListing = async (id: string, jobData: any) => {
    // .create(functionName, args) args array is defined by the updateName fn in collection schema
    const recordData = await jobsReference
      .record(id)
      .call('updateJob', jobData);
    return recordData.data;
  };

  return {
    registerCandidate,
    readCandidateById,
    readCandidateData,
    checkCandidateRegistration,
    registerReferrer,
    readReferrerById,
    registerCompany,
    readCompanyById,
    createJobListing,
    applyforJob,
    readJobListingById,
    checkCompanyRegistration,
    checkReferrerRegistration,
    readAllJobListings,
    readAllJobListingsForClient,
    updateJobListing,
    readCandidateDataForJob,
    registerJobApplication,
  };
};

export default usePolybase;
