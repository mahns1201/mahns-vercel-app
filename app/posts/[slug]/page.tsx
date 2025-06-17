import { getPostBySlug } from '../../../lib/get-post-by-slug';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post?.title ?? '포스트',
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <article className="prose mx-auto py-12 px-4 max-w-3xl bg-white rounded-lg shadow-md">
      <header className="mb-8 border-b pb-4">
        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        <p className="text-gray-400 text-sm mt-2">{post.createdAt}</p>
      </header>
      <section className="mt-6">
        <div className="prose prose-lg">{post.title}</div>
      </section>
    </article>
  );
}
