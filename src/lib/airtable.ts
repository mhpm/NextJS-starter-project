var Airtable = require('airtable');

export const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base('appsxnnNPcz2bbWMB');

export const table = base('coffee-stores');

export const getMinifiedRecords = (records: any) =>
  records.map((record: any) => ({ recordId: record.id, ...record.fields }));

export enum FiltersType {
  id = 'id',
}

export const getRecordByFilter = async (type: FiltersType, value: any) => {
  const records = await table
    .select({
      filterByFormula: `${type}="${value}"`,
    })
    .firstPage();

  return getMinifiedRecords(records);
};
