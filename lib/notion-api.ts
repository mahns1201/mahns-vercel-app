import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export const getNotionDatabases = async (filter: any, sorts?: any) => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter,
    sorts,
  });
};
