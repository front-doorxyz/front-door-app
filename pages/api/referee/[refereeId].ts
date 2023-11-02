import { Referee, RefereeItem } from '@/db/entities/referee';

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { item?: RefereeItem; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { refereeEmail } = req.query;
    if (!refereeEmail || Array.isArray(refereeEmail)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one candidate can be requested',
      });
    }
    try {
      const result = await Referee.get({
        email: refereeEmail,
      }).go();

      if (result.data) {
        res.status(200).json({ item: result.data });
      } else {
        res.status(404).json({ error: 'The requested referee does not exist' });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  } else if (req.method === 'PUT') {
    const { email, status } = req.query;
    if (!status || Array.isArray(status)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one candidate can be requested',
      });
    }
    try {
      const result = await Referee.put({
        email,
        refId,
        jobId,
        status: status,
      }).go();

      if (result.data) {
        res.status(200).json({ item: result.data });
      } else {
        res.status(404).json({ error: 'The requested referee does not exist' });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  } else {
    res.status(405).end();
  }
}
