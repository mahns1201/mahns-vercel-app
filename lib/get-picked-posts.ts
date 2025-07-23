import { PageObjectResponse } from '@notionhq/client';
import { getNotionDatabases } from '../apis/get-notion-databases';
import { Post } from '../types/post';
import { parsePost } from '../utils/parser';

const MAX_PAGE_SIZE = 5;

export const getPickedPosts = async (): Promise<Post[]> => {
  const response = await getNotionDatabases(
    {
      and: [
        {
          property: 'Published',
          checkbox: { equals: true },
        },
        {
          property: 'Picked',
          checkbox: { equals: true },
        },
      ],
    },
    [
      {
        property: 'Order',
        direction: 'ascending',
      },
    ],
    MAX_PAGE_SIZE,
  );

  return response.results
    .filter((r): r is PageObjectResponse => 'properties' in r)
    .map(parsePost);
};
