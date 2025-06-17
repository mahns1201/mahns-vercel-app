import Link from 'next/link';
import { getCurrentPosts } from '../../lib/posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';
import Title from '../../components/Title';

const Posts = async () => {
  const posts = await getCurrentPosts();

  return (
    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      {!posts.length && 'No posts found.'}
      <PostList posts={posts} />
    </ul>
  );
};

const Home = () => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <Title title="최신글" />
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </div>
      <div className="flex justify-end text-base font-medium">
        <Link
          href="/posts"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="모든 게시물"
        >
          모든 게시물 &rarr;
        </Link>
      </div>
    </>
  );
};

export default Home;
