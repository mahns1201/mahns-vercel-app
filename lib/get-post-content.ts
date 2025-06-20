import notionMd from '../clients/notion-md';

export const getPostContent = async (pageId: string): Promise<string> => {
  const mdBlocks = await notionMd.pageToMarkdown(pageId);
  const mdObject = notionMd.toMarkdownString(mdBlocks);

  return mdObject.parent;
};
