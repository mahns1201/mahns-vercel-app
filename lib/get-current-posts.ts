import { getNotionDatabases } from '../apis/get-notion-databases';
import { Post } from '../types/post';

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

  return response.results.map((page) => {
    return {
      id: page.id,
      title: page.properties.Title.title[0]?.plain_text ?? '',
      slug: page.properties.Slug.rich_text[0]?.plain_text ?? '',
      summary: page.properties.Summary.rich_text[0]?.plain_text ?? '',
      thumbnail: page.cover?.external.url ?? '',
      createdAt: page.created_time ?? '',
      updatedAt: page.last_edited_time ?? '',
    };
  });
};
