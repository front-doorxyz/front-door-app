import {
  JobApplication,
  JobApplicationItem,
} from '@/db/entities/job-application';
import type { NextApiRequest, NextApiResponse } from 'next';
import { ulid } from 'ulidx';

type Error = {
  error: string;
  message: string;
};

type Success = {
  items: JobApplicationItem[];
};

type ResponseData = Success | Error;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const result = await JobApplication.create({
        ...req.body,
        applicationId: ulid(),
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
