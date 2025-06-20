import { PageObjectResponse } from '@notionhq/client';
import { getNotionDatabases } from '../apis/get-notion-databases';
import { Post } from '../types/post';
import { parsePost } from '../utils/parser';

const PAGE_SIZE = 5;

export const getCurrentPosts = async (): Promise<Post[]> => {
  const response = await getNotionDatabases(
    {
      property: 'Published',
      checkbox: { equals: true },
    },
    [
      {
        property: 'CreatedAt',
        direction: 'descending',
      },
    ],
    PAGE_SIZE,
  );

  return response.results
    .filter((r): r is PageObjectResponse => 'properties' in r)
    .map(parsePost);
};
