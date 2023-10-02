import { Polybase } from "@polybase/client";
import { Address } from "wagmi";
const usePolybase = () => {
  const dbNameSpace =
    "pk/0xbaeff2028f7c15332ab23549f09c33eee5cb9231559067afe56f975ea6a4b660b1e32eead19b6a8bd48d8347fa3753c8749d43b9a8716905c0fc8a3c70e3e9b1/navh-final";

  const db = new Polybase({
    defaultNamespace: dbNameSpace,
  });

  const jobsReference = db.collection("Jobs");
  const referrersReference = db.collection("Referrers");
  const companiesReference = db.collection("Companies");
  const candidatesReference = db.collection("Candidates");

  const registerCandidate = async (candidateData: any) => {
    const recordData = await candidatesReference.create(candidateData);
    return recordData;
  };

  const readCandidateById = async (id: string) => {
    const record = await candidatesReference.record(id).get();
    const { data } = record;
    return data;
  };

  const checkCandidateRegistration = async (id: string) => {
    const record = await candidatesReference.record(id).get();
    const exists = record?.exists() || false;
    console.log(exists);
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

  const registerCompany = async (referrerData: any) => {
    const recordData = await companiesReference.create(referrerData);
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
      .call("applyCandidate", [candidateId]);
    return recordData;
  };

  const readJobListingById = async (id: string) => {
    const record = await jobsReference.record(id).get();
    const { data } = record;
    return data;
  };

  const checkCompanyRegistration = async (id: string) => {
    const record = await companiesReference.record(id).get();
    const exists = record?.exists() || false;
    console.log(exists);
    return exists;
  };

  const checkReferrerRegistration = async (id: string) => {
    const record = await referrersReference.record(id).get();
    const exists = record?.exists() || false;
    console.log(exists);
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
    const records = await jobsReference.where("owner", "==", address).get();
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
      .call("updateJob", jobData);
    return recordData.data;
  };

  return {
    registerCandidate,
    readCandidateById,
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
  };
};

export default usePolybase;
