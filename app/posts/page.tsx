import { getAllPosts } from '../../lib/posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';
import Link from 'next/link';
import Title from '../../components/Title';

const Posts = async () => {
  const posts = await getAllPosts();
  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!posts.length && 'No posts found.'}
      <PostList posts={posts} />
    </ul>
  );
};

const PostsPage = () => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <Title title="게시글" />
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </div>
      <div className="flex justify-end text-base font-medium">
        <Link
          href="/"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="최근 게시물"
        >
          최근 게시물 &rarr;
        </Link>
      </div>
    </>
  );
};

export default PostsPage;
