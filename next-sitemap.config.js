const { loadEnvConfig } = require('@next/env');

loadEnvConfig(process.cwd());

module.exports = {
  siteUrl: 'https://mahns.vercel.app/',
  generateRobotsTxt: true,
  sitemapSize: 10000,

  additionalPaths: async () => {
    const { Client } = require('@notionhq/client');
    const notion = new Client({ auth: process.env.NOTION_API_KEY });

    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
      filter: { property: 'Published', checkbox: { equals: true } },
      page_size: 100,
    });

    return response.results
      .filter((page) => 'properties' in page)
      .flatMap((page) => {
        const slugProp = page.properties['Slug'];
        if (slugProp?.type !== 'rich_text') return [];
        const slug = slugProp.rich_text[0]?.plain_text;
        if (!slug) return [];
        return [{ loc: `/posts/${slug}` }];
      });
  },
};
