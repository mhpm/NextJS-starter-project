import { IStore } from '@/src/interfaces';
import { table, getRecordByFilter, FiltersType } from '@/src/lib/airtable';
import { NextApiRequest, NextApiResponse } from 'next';

const createCoffeeStore = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  if (req.method === 'POST') {
    const { id, title, description, imageUrl, likes }: IStore = req.body;

    if (id) {
      try {
        const record = await getRecordByFilter(FiltersType.id, id);
        if (record.length) {
          res.json(record);
        } else if (title) {
          const createdRecord = await table.create({
            id,
            title,
            description,
            likes,
            imageUrl,
          });

          res.json({ msg: 'Created Record: ', record: createdRecord.fields });
        } else {
          res.status(400);
          res.json({ msg: 'Title is missing' });
        }
      } catch (error) {
        console.log('error: ', error);
        res.status(500);
        res.json({ msg: 'Error: ', error });
      }
    } else {
      res.status(400);
      res.json({ msg: 'Id is missing' });
    }
  }
};

export default createCoffeeStore;
