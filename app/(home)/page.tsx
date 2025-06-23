import { getCurrentPosts } from '../../lib/get-current-posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';
import GoTo from '../../components/GoTo';

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
      <GoTo params={{ href: '/posts', content: '모든 게시물' }} />
    </>
  );
};

export default Home;
