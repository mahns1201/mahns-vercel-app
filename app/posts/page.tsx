import { getPosts } from '../../lib/get-posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';
import Link from 'next/link';

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
      <div className="flex justify-end">
        <Link
          href="/posts"
          className="cursor-pointer my-6"
          aria-label="최근 게시물"
        >
          <p>최근 게시물 &rarr;</p>
        </Link>
      </div>
    </>
  );
};

export default PostsPage;
