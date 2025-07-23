import { Post } from './post';
import { ReadTimeResults } from 'reading-time';
export interface PostDetail extends Post {
  content: string;
  stats: ReadTimeResults;
}
