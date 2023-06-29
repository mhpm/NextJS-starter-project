const Airtable = require('airtable');

export const base = new Airtable({
  apiKey:
    'pat3qaUUDIlhLJvVs.eeb569684eff9b0bc82cc761b71135bd5207cdda54d9b87c07ceba494da8338e',
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
