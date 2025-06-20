import { getNotionDatabases } from '../apis/get-notion-databases';
import { Post } from '../types/post';

export const getPosts = async (): Promise<Post[]> => {
  const response = await getNotionDatabases({
    property: 'Published',
    checkbox: { equals: true },
  });

  return response.results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text ?? '',
      slug: page.properties.Slug.rich_text[0]?.plain_text ?? '',
      summary: page.properties.Summary.rich_text[0]?.plain_text ?? '',
      thumbnail: page.cover?.external.url ?? '',
      createdAt: page.created_time?.slice(0, 10) ?? '',
      updatedAt: page.last_edited_time ?? '',
    };
  });
};
