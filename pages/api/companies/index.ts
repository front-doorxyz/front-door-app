import { Company } from '@/db/entities/company';
import { EntityItem } from 'electrodb';
import type { NextApiRequest, NextApiResponse } from 'next';

type Error = {
  error: string;
  message: string;
};

type Success = {
  item: EntityItem<typeof Company>;
};

export type RegisterCompanyResponse = Success | Error;

export const isSuccessResponse = (response: any): response is Success =>
  typeof response === 'object' && response !== null && !!response.item;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<RegisterCompanyResponse>
) {
  if (req.method === 'POST') {
    try {
      const result = await Company.create({
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
