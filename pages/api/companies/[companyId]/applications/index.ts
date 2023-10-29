import {
  JobApplication,
  JobApplicationItem,
} from '@/db/entities/job-application';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { items?: JobApplicationItem[]; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { companyId } = req.query;
    if (!companyId || Array.isArray(companyId)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one comapny can be requested',
      });
    }
    try {
      const result = await JobApplication.query
        .byCompany({
          companyId,
        })
        .go();

      if (result.data) {
        res.status(200).json({ items: result.data });
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
