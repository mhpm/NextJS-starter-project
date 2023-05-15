import {
  table,
  getRecordByFilter,
  FiltersType,
  getMinifiedRecords,
} from '@/src/lib/airtable';
import { NextApiRequest, NextApiResponse } from 'next';

const likeUpCoffeeStore = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  if (req.method === 'PUT') {
    try {
      const { id } = req.query;

      if (id) {
        const record = await getRecordByFilter(FiltersType.id, id);

        if (record.length) {
          const store = record[0];

          // Like up
          const likes = parseInt(store.likes) + 1;

          // update record
          const recordUpdated = await table.update([
            {
              id: store.recordId,
              fields: {
                likes,
              },
            },
          ]);

          res.json({
            updated: getMinifiedRecords(recordUpdated),
          });
        } else {
          res.json({ message: "Coffee Store id doesn't exist" });
        }
      } else {
        res.json({ message: 'Id missing' });
      }
    } catch (error) {
      res.status(500);
      res.json({ message: 'Something went wrong', error });
    }
  }
};

export default likeUpCoffeeStore;
