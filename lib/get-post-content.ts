import { MdStringObject } from 'notion-to-md/build/types';
import notionMd from '../clients/notion-md';

export const getPostContent = async (
  pageId: string,
): Promise<MdStringObject> => {
  const mdBlocks = await notionMd.pageToMarkdown(pageId);
  const mdString = notionMd.toMarkdownString(mdBlocks);

  return mdString;
};
