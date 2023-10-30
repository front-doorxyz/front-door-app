import { Job, JobItem } from '@/db/entities/job';
import type { NextApiRequest, NextApiResponse } from 'next';

type Error = {
  error: string;
  message: string;
};

type Success = {
  item?: JobItem;
};

type ResponseData = Success | Error;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { jobId } = req.query;
    if (!jobId || Array.isArray(jobId)) {
      return res.status(400).json({
        error: 'Malformed Request',
        message: 'The request is malformed. Only one job can be requested',
      });
    }
    try {
      const result = await Job.get({
        jobId,
      }).go();
      console.log(result);

      if (result.data) {
        res.status(200).json({ item: result.data });
      } else {
        res.status(404).json({
          error: 'Incomplete request',
          message: 'The requested job does not exist',
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
