import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const databaseId = process.env.NOTION_DATABASE_ID!;

export async function getAllPosts() {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      checkbox: { equals: true },
    },
    // sorts: [
    //   {
    //     property: 'Date',
    //     direction: 'descending',
    //   },
    // ],
  });

  // Notion 데이터베이스의 구조에 맞게 데이터 변환
  return response.results.map((page: any) => {
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

export async function getPostBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Slug',
      rich_text: { equals: slug },
    },
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
