import {
  PageObjectResponse,
  RichTextItemResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { Post } from '../types/post';

/**
 * 단일 리치 텍스트 필드에서 plain_text만 추출
 */
const getPlainTextFromRichText = (
  richText: RichTextItemResponse[] | undefined,
): string => richText?.[0]?.plain_text ?? '';

/**
 * Notion Page에서 필요한 필드만 추출
 */
export const parsePost = (page: PageObjectResponse): Post => {
  const titleProp = page.properties['Title'];
  const slugProp = page.properties['Slug'];
  const summaryProp = page.properties['Summary'];
  const createdAtProp = page.properties['CreatedAt'];
  const tagsProp = page.properties['Tags'];

  return {
    id: page.id,
    title: getPlainTextFromRichText(
      titleProp?.type === 'title' ? titleProp.title : [],
    ),
    slug: getPlainTextFromRichText(
      slugProp?.type === 'rich_text' ? slugProp.rich_text : [],
    ),
    summary: getPlainTextFromRichText(
      summaryProp?.type === 'rich_text' ? summaryProp.rich_text : [],
    ).slice(0, 150),
    tags:
      tagsProp?.type === 'multi_select'
        ? tagsProp.multi_select.map((tag) => tag.name)
        : [],
    thumbnail:
      page.cover?.type === 'external'
        ? page.cover.external.url
        : page.cover?.type === 'file'
          ? page.cover.file.url
          : '',
    createdAt:
      createdAtProp?.type === 'date'
        ? createdAtProp.date.start.slice(0, 10)
        : '',
    updatedAt: page.last_edited_time,
  };
};
