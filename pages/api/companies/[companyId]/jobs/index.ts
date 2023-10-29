import { Job, JobItem } from '@/db/entities/job';
import type { NextApiRequest, NextApiResponse } from 'next';

type Error = {
  error: string;
  message: string;
};

type Success = {
  items: JobItem[];
};

type ResponseData = Success | Error;

export const isSuccessResponse = (response: any): response is Success =>
  typeof response === 'object' && response !== null && !!response.items;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { companyId } = req.query;
    if (!companyId || Array.isArray(companyId)) {
      return res.status(400).json({
        error: 'Malformed',
        message: 'The request is malformed. Only one comapny can be requested',
      });
    }
    try {
      const result = await Job.query
        .company({
          companyId,
        })
        .go();

      if (result.data) {
        res.status(200).json({ items: result.data });
      } else {
        res.status(404).json({
          error: 'Not Found',
          message: 'The requested company does not exist',
        });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  } else {
    res.status(405).end();
  }
}
