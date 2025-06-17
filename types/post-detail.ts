import { MdStringObject } from 'notion-to-md/build/types';
import { Post } from './post';

export interface PostDetail extends Post {
  content: MdStringObject;
}
