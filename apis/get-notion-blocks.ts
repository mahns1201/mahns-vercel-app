import notion from '../clients/notion';

export const getNotionBlocks = async (pageId: string) => {
  return notion.blocks.children.list({
    block_id: pageId,
  });
};
