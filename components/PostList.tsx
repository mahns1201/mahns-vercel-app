import Link from 'next/link';
import PostCard from './PostCard';

export default function PostList({ posts }) {
  if (!posts.length) return <li>No posts found.</li>;

  return (
    <>
      {posts.map((post) => (
        <li key={post.slug} className="group">
          <Link
            href={`/blog/${post.slug}`}
            className="block py-12"
            aria-label={`Read more: "${post.title}"`}
          >
            <PostCard post={post} />
          </Link>
        </li>
      ))}
    </>
  );
}
