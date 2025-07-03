import { getPostContent } from './get-post-content';
import { getNotionDatabases } from '../apis/get-notion-databases';
import { PostDetail } from '../types/post-detail';
import { parsePost } from '../utils/parser';
import { PageObjectResponse } from '@notionhq/client';

export const getPostBySlug = async (
  slug: string,
): Promise<PostDetail | null> => {
  const response = await getNotionDatabases(
    {
      property: 'Slug',
      rich_text: { equals: slug },
    },
    null,
    1,
  );

  const page = response.results[0];
  if (!page) return null;

  const post = response.results
    .filter((r): r is PageObjectResponse => 'properties' in r)
    .map(parsePost);

  const content = await getPostContent(page.id);

  return {
    ...post[0],
    content,
  };
};
