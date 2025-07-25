'use client';

import PostCard from './PostCard';
import { Post } from '../types/post';
import { useRouter } from 'next/navigation';

const PostList = ({ posts }: { posts: Post[] }) => {
  const router = useRouter();

  if (!posts.length) return <li>No posts found.</li>;

  const handlePostClick = (slug: string) => {
    router.push(`/posts/${slug}`);
  };

  return (
    <>
      {posts.map((post) => (
        <li key={post.slug} className="group cursor-pointer">
          <div
            onClick={() => handlePostClick(post.slug)}
            className="block py-6 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label={`Read more: "${post.title}"`}
          >
            <PostCard post={post} />
          </div>
        </li>
      ))}
    </>
  );
};

export default PostList;
