import { getAllPosts } from '../../lib/posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';
import Link from 'next/link';

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
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            게시글
          </h1>
        </div>
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
