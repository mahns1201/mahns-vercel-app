import { NotionToMarkdown } from 'notion-to-md';
import notion from './notion';

const notionMd = new NotionToMarkdown({ notionClient: notion });

export default notionMd;
