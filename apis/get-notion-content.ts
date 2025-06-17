import notion from '../clients/notion';

export const getNotionContent = async (pageId: string) => {
  const blocks = [];

  let cursor: string | undefined = undefined;
  while (true) {
    const response = await notion.blocks.children.list({
      block_id: pageId,
      start_cursor: cursor,
      page_size: 100,
    });

    blocks.push(...response.results);

    if (!response.has_more) break;
    cursor = response.next_cursor;
  }

  return blocks;
};
