import { PageObjectResponse } from '@notionhq/client';
import { getNotionDatabases } from '../apis/get-notion-databases';
import { Post } from '../types/post';
import { parsePost } from '../utils/parser';

export const getPosts = async (): Promise<Post[]> => {
  const response = await getNotionDatabases({
    property: 'Published',
    checkbox: { equals: true },
  });

  return response.results
    .filter((r): r is PageObjectResponse => 'properties' in r)
    .map(parsePost);
};
