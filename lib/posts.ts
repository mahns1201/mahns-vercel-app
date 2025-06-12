import { Post } from '../types/post';
import { getNotionDatabases } from './notion-api';

export async function getCurrentPosts(): Promise<Post[]> {
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
      content: page.properties.Content.rich_text[0]?.plain_text ?? '',
      createdAt: page.properties.CreatedAt.date?.start ?? '',
    };
  });
}

export async function getAllPosts(): Promise<Post[]> {
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
      content: page.properties.Content.rich_text[0]?.plain_text ?? '',
      createdAt: page.properties.CreatedAt.date?.start ?? '',
    };
  });
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
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
    content: page.properties.Content.rich_text[0]?.plain_text ?? '',
    createdAt: page.properties.CreatedAt.date?.start ?? '',
  };
}
