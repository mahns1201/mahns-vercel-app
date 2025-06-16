import { getAllPosts } from '../../lib/posts';
import PostList from '../../components/PostList';

export default async function PostsPage() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            게시글
          </h1>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          <PostList posts={posts} />
        </ul>
      </div>
    </>
  );
}
