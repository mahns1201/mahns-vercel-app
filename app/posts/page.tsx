import { getAllPosts } from '../../lib/posts';
import PostList from '../../components/PostList';

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <div className="py-8">
      <h1 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
        게시글
      </h1>
      <PostList posts={posts} />
    </div>
  );
}
