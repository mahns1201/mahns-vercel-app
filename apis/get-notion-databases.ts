import notion from '../clients/notion';

export const getNotionDatabases = async (
  filter: any,
  sorts: any,
  pageSize = 5,
) => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter,
    sorts,
    page_size: pageSize,
  });
};
