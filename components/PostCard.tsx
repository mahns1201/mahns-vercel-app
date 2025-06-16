export default function PostCard({ post }) {
  return (
    <>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {post.title}
      </h2>
      <p className="text-gray-500 dark:text-gray-400">{post.summary}</p>
    </>
  );
}
