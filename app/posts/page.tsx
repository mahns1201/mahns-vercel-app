import { getAllPosts } from '../../lib/posts';
import PostList from '../../components/PostList';

export default async function PostsPage() {
  const posts = await getAllPosts();
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">블로그</h1>
      <PostList posts={posts} />
    </div>
  );
}
