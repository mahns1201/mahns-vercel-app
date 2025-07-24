import Link from 'next/link';
import PostCard from './PostCard';
import { Post } from '../types/post';

const PostList = ({ posts }: { posts: Post[] }) => {
  if (!posts.length) return <li>No posts found.</li>;

  return (
    <>
      {posts.map((post) => (
        <li key={post.slug} className="group">
          <Link
            href={`/posts/${post.slug}`}
            className="block py-6 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label={`Read more: "${post.title}"`}
          >
            <PostCard post={post} />
          </Link>
        </li>
      ))}
    </>
  );
};

export default PostList;
