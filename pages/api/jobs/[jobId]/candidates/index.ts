import { Candidate, CandidateItem } from '@/db/entities/candidate';
import {
  JobApplication,
  JobApplicationItem,
} from '@/db/entities/job-application';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { items?: CandidateItem[]; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { jobId } = req.query;
    console.log(jobId);
    if (!jobId || Array.isArray(jobId)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one comapny can be requested',
      });
    }
    try {
      const result = await JobApplication.query
        .byJob({
          jobId,
        })
        .go();
      console.log(result);

      if (result.data) {
        console.log(result.data);

        const { data, unprocessed } = await Candidate.get(result.data).go();
        res.status(200).json({ items: data });
      } else {
        res.status(404).json({ error: 'The requested job does not exist' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
}
