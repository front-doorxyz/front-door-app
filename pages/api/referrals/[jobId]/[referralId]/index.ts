import { Referral, ReferralItem } from '@/db/entities/referral';
import { checkParams } from '@/helpers';

import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { item?: ReferralItem; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { refererAddress, referralId, jobId } = req.query;
    if (!checkParams(refererAddress, referralId, jobId)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one referral can be requested',
      });
    }
    try {
      const result = await Referral.get({
        refererAddress: refererAddress as string,
        jobId: parseInt(jobId as string),
        refId: parseInt(referralId as string),
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
    const { refererAddress, referralId, jobId } = req.query;
    const { status } = req.body;

    if (!checkParams(refererAddress, referralId, jobId, status)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one referral can be requested',
      });
    }
    try {
      const result = await Referral.update({
        refId: parseInt(referralId as string),
        jobId: parseInt(jobId as string),
        refererAddress: refererAddress as string,
      })
        .set({ status })
        .go({
          response: 'all_new',
          // data: EntityIdentifiers<typeof Referral>,
        });

      if (result.data) {
        res.status(200).json({ item: result.data as ReferralItem });
      } else {
        res
          .status(404)
          .json({ error: 'The requested referral does not exist' });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  } else {
    res.status(405).end();
  }
}
