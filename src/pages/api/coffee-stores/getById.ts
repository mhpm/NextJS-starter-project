import { getRecordByFilter, FiltersType } from '@/src/lib/airtable';
import { NextApiRequest, NextApiResponse } from 'next';

const getCoffeeStoreById = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  if (req.method === 'GET') {
    try {
      const { id } = req.query;

      if (id) {
        const record = await getRecordByFilter(FiltersType.id, id);
        res.json(
          record.length ? record : { message: "Coffee Store id doesn't exist" }
        );
      } else {
        res.json({ message: 'Id missing' });
      }
    } catch (error) {
      res.status(500);
      res.json({ message: 'Something went wrong', error });
    }
  }
};

export default getCoffeeStoreById;
