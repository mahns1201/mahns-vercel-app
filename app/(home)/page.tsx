import Link from 'next/link';
import { getCurrentPosts } from '../../lib/get-current-posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';

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
        <h1 className="h1 my-2 pt-6 pb-8 md:my-5">최신글</h1>
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
