import Link from 'next/link';
import { getCurrentPosts } from '../../lib/posts';
import PostList from '../../components/PostList';

const MAX_SIZE = 5;

const Home = async () => {
  const posts = await getCurrentPosts();

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-6xl dark:text-gray-100">
            최신글
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <PostList posts={posts.slice(0, MAX_SIZE)} />
        </ul>
      </div>
      {posts.length > MAX_SIZE && (
        <div className="flex justify-end text-base font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
