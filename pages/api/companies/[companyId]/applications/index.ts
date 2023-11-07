import { Candidate, CandidateItem } from '@/db/entities/candidate';
import {
  JobApplication,
  JobApplicationItem,
} from '@/db/entities/job-application';
import { ReferrerItem } from '@/db/entities/referrer';
import type { NextApiRequest, NextApiResponse } from 'next';
export type Status = 'pending' | 'hired' | 'rejected';

export type JobApplication = {
  application: JobApplicationItem & { date: string; status: Status };
  candidate: CandidateItem;
  referrer: ReferrerItem & { score: number };
};
type ResponseData = {
  items?: JobApplication[];
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { companyId } = req.query;
    if (!companyId || Array.isArray(companyId)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one company can be requested',
      });
    }
    try {
      const jobApplicationResults = await JobApplication.query
        .byCompany({
          companyId,
        })
        .go();

      const candidateAddressSeen = new Set();

      const candidateResult = await Candidate.get(
        jobApplicationResults.data.filter((application) => {
          if (candidateAddressSeen.has(application.walletAddress)) {
            return false;
          } else {
            candidateAddressSeen.add(application.walletAddress);
            return true;
          }
        })
      ).go();

      if (jobApplicationResults.data) {
        const responseItems = jobApplicationResults.data.map(
          (application, i) => ({
            application: {
              ...application,
              status: (i % 2
                ? 'pending'
                : i % 3
                ? 'rejected'
                : 'hired') as Status,
            },
            candidate: candidateResult.data.find(
              (candidate) =>
                candidate.walletAddress === application.walletAddress
            ),
            referrer: { score: 4.5 },
          })
        ) as any as JobApplication[];
        res.status(200).json({ items: responseItems });
      } else {
        res.status(404).json({ error: 'The requested company does not exist' });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  } else {
    res.status(405).end();
  }
}
