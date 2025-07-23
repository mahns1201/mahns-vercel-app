export const dynamic = 'force-dynamic';

import { getPickedPosts } from '../../lib/get-picked-posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';
import GoTo from '../../components/GoTo';

const Posts = async () => {
  const posts = await getPickedPosts();

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
        <h1 className="my-2 pt-6 pb-8 md:my-5">고정 게시물</h1>
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </div>
      <GoTo params={{ href: '/posts', content: '모든 게시물' }} />
    </>
  );
};

export default Home;
