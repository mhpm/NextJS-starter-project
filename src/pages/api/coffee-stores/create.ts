import { NextApiRequest, NextApiResponse } from 'next';

var Airtable = require('airtable');
var base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_KEY);

const table = base('coffee-stores');

const createCoffeeStore = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  table
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: 'Grid view',
    })
    .eachPage(
      function page(records: any, fetchNextPage: any) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record: any) {
          console.log('Retrieved', record.get('id'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err: any) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );

  res.json({ msg: 'Hello' });
};

export default createCoffeeStore;
