import { getNotionDatabases } from '../apis/get-notion-databases';
import { Post } from '../types/post';

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const response = await getNotionDatabases({
    property: 'Slug',
    rich_text: { equals: slug },
  });

  const page = response.results[0];
  if (!page) return null;

  return {
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text ?? '',
    slug: page.properties.Slug.rich_text[0]?.plain_text ?? '',
    summary: page.properties.Summary.rich_text[0]?.plain_text ?? '',
    createdAt: page.created_time ?? '',
    updatedAt: page.last_edited_time ?? '',
  };
};
