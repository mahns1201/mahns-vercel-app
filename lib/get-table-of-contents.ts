import { BlockObjectResponse } from '@notionhq/client';
import { getNotionBlocks } from '../apis/get-notion-blocks';
import { TableOfContent } from '../types/table-of-content';

export const getTableOfContents = async (
  pageId: string,
): Promise<TableOfContent[]> => {
  const response = await getNotionBlocks(pageId);

  const headings = response.results.filter(
    (r): r is BlockObjectResponse =>
      'heading_1' in r || 'heading_2' in r || 'heading_3' in r,
  );

  return headings.map((block) => ({
    title: block[block.type].rich_text[0]?.plain_text || ('' as string),
    id: block.id,
    level: block.type === 'heading_1' ? 1 : block.type === 'heading_2' ? 2 : 3,
  }));
};
