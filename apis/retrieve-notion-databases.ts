import notion from '../clients/notion';

export const retrieveNotionDatabases = async () => {
  return notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID!,
  });
};
