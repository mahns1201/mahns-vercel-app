import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
      <Link href={`/posts/${post.slug}`}>
        <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
      </Link>
      <p className="text-gray-500 text-sm mb-2">{post.createdAt}</p>
      <p className="text-gray-700">{post.summary}</p>
    </div>
  );
}
