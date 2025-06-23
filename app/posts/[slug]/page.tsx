import { getPostBySlug } from '../../../lib/get-post-by-slug';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';
import { Suspense } from 'react';
import PostLoading from './Loading';

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post?.title ?? '',
  };
}

const Post = async ({ params }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <div>
      <div className="flex justify-between items-end my-2 pt-6 pb-8 md:my-5">
        <h1>{post.title}</h1>
        <p>{post.createdAt}</p>
      </div>
      <div className="mt-6">
        <div className="markdown-body" style={{ backgroundColor: '#030712' }}>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default function PostDetailPage({ params }: Params) {
  return (
    <article className="prose mx-auto py-12 px-4 max-w-3xl">
      <Suspense fallback={<PostLoading />}>
        <Post params={params} />
      </Suspense>
    </article>
  );
}
