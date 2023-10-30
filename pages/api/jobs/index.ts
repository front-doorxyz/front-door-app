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
    try {
      const result = await Job.query
        .all({
          shard: 1,
          type: 'job',
          status: 'ACTIVE',
        })
        .go();

      res.status(200).json({ items: result.data });
    } catch (error) {
      console.log(error);
      res.status(500).end();
    }
  } else if (req.method === 'POST') {
    try {
      const result = await Job.create({
        ...req.body,
        shard: 1,
        type: 'job',
        status: 'ACTIVE',
      }).go();
      res.status(200).json({ items: [result.data] });
    } catch (error: any) {
      console.log(error);
      if (error.code === 4001) {
        res.status(409).json({
          error: 'Resource already exists',
          message: 'The requested item is already present in the database.',
        });
      }
      res.status(500).end();
    }
  } else {
    res.status(405).end();
  }
}
