import Link from 'next/link';
import PostCard from './PostCard';

export default function PostList({ posts }) {
  if (!posts.length) return <li>No posts found.</li>;

  return (
    <>
      {posts.map((post) => (
        <li key={post.slug} className="py-12">
          <article>
            <div className="xl:grid xl:grid-cols-4 xl:items-baseline">
              <div />
              <div className="xl:col-span-3">
                <PostCard post={post} />
                <div className="text-base font-medium">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    aria-label={`Read more: "${post.title}"`}
                  >
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </li>
      ))}
    </>
  );
}
