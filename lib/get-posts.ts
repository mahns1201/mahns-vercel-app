import { PageObjectResponse } from '@notionhq/client';
import { getNotionDatabases } from '../apis/get-notion-databases';
import { Post } from '../types/post';
import { parsePost } from '../utils/parser';

const MAX_PAGE_SIZE = 100;

export const getPosts = async (): Promise<Post[]> => {
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
    MAX_PAGE_SIZE,
  );

  return response.results
    .filter((r): r is PageObjectResponse => 'properties' in r)
    .map(parsePost);
};
