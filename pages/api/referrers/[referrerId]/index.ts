import { Referrer, ReferrerItem } from '@/db/entities/referrer';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { item?: ReferrerItem; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { referrerId } = req.query;
    if (!referrerId || Array.isArray(referrerId)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one referrer can be requested',
      });
    }
    try {
      const result = await Referrer.get({
        walletAddress: referrerId,
      }).go();

      if (result.data) {
        res.status(200).json({ item: result.data });
      } else {
        res
          .status(404)
          .json({ error: 'The requested referrer does not exist' });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  } else {
    res.status(405).end();
  }
}
