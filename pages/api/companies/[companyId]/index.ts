import { Company, CompanyItem } from '@/db/entities/company';
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = { item?: CompanyItem; error?: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { companyId } = req.query;
    if (!companyId || Array.isArray(companyId)) {
      return res.status(400).json({
        error: 'The request is malformed. Only one comapny can be requested',
      });
    }
    try {
      const result = await Company.get({
        companyId,
      }).go();

      if (result.data) {
        res.status(200).json({ item: result.data });
      } else {
        res.status(404).json({ error: 'The requested company does not exist' });
      }
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  } else {
    res.status(405).end();
  }
}
