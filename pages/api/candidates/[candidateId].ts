import { Candidate, CandidateItem } from '@/db/entities/candidate';
import { Referrer, ReferrerItem } from '@/db/entities/referrer';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { item?: CandidateItem; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { candidateId } = req.query;
    if (!candidateId || Array.isArray(candidateId)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one candidate can be requested',
      });
    }
    try {
      const result = await Candidate.get({
        walletAddress: candidateId,
      }).go();

      if (result.data) {
        res.status(200).json({ item: result.data });
      } else {
        res
          .status(404)
          .json({ error: 'The requested candidate does not exist' });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  } else {
    res.status(405).end();
  }
}
