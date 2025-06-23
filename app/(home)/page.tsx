import Link from 'next/link';
import { getCurrentPosts } from '../../lib/get-current-posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';

const Posts = async () => {
  const posts = await getCurrentPosts();

  return (
    <ul>
      <PostList posts={posts} />
    </ul>
  );
};

const Home = () => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="my-2 pt-6 pb-8 md:my-5">최신글</h1>
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </div>
      <div className="flex justify-end">
        <Link
          href="/posts"
          className="cursor-pointer my-6"
          aria-label="모든 게시물"
        >
          <p>모든 게시물 &rarr;</p>
        </Link>
      </div>
    </>
  );
};

export default Home;
