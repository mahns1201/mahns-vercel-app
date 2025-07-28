import { Post } from './post';
import { ReadTimeResults } from 'reading-time';
import { TableOfContent } from './table-of-content';

export interface PostDetail extends Post {
  content: string;
  stats: ReadTimeResults;
  tableOfContents?: TableOfContent[];
}
