import { getPosts } from '../../lib/get-posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';
import GoTo from '../../components/GoTo';

const Posts = async () => {
  const posts = await getPosts();

  return (
    <ul>
      <PostList posts={posts} />
    </ul>
  );
};

const PostsPage = () => {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="my-2 pt-6 pb-8 md:my-5">게시물</h1>
        <Suspense fallback={<Loading />}>
          <Posts />
        </Suspense>
      </div>
      <GoTo params={{ href: '/', content: '최근 게시물' }} />
    </>
  );
};

export default PostsPage;
