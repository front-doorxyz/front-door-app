import { Referrer, ReferrerItem } from '@/db/entities/referrer';
import type { NextApiRequest, NextApiResponse } from 'next';

type Error = {
  error: string;
  message: string;
};

type Success = {
  item: ReferrerItem;
};

type ResponseData = Success | Error;

export const isSuccessResponse = (response: any): response is Success =>
  typeof response === 'object' && response !== null && !!response.item;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'POST') {
    try {
      const result = await Referrer.create({
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
