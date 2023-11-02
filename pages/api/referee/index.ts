import { Referee, RefereeItem } from '@/db/entities/referee';
import type { NextApiRequest, NextApiResponse } from 'next';

type Error = {
  error: string;
  message: string;
};

type Success = {
  item?: RefereeItem;
};

type ResponseData = Success | Error;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const result = await Referee.create({
        ...req.body,
      }).go();
      res.status(200).json({ item: result.data });
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
