import { getPostBySlug } from '../../../lib/get-post-by-slug';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import PostLoading from './Loading';
import MdRender from './MdRender';
import siteMetadata from '../../../data/metadata';

interface Params {
  params: Promise<{ slug: string }>;
}

export const generateMetadata = async ({ params }: Params) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return {
    title: post?.title ?? '',
    description: post?.summary ?? '',
    openGraph: {
      title: post?.title ?? '',
      description: post?.summary ?? '',
      type: 'article',
      publishedTime: post?.createdAt ?? '',
      modifiedTime: post?.updatedAt ?? '',
      url: post?.slug ? `${siteMetadata.url}/posts/${post.slug}` : '',
      images: post?.thumbnail ?? '',
      siteName: siteMetadata.title,
      authors: siteMetadata.author,
    },
  };
};

const Post = async ({ params }) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) return notFound();

  return (
    <>
      <div className="flex justify-between items-end my-2 pt-6 pb-8 md:my-5">
        <h1>{post.title}</h1>
        <p>{post.createdAt}</p>
      </div>
      <div className="mt-6">
        <MdRender content={post.content} />
      </div>
    </>
  );
};

const PostDetailPage = ({ params }: Params) => {
  return (
    <article className="prose mx-auto py-12 px-4 max-w-3xl">
      <Suspense fallback={<PostLoading />}>
        <Post params={params} />
      </Suspense>
    </article>
  );
};

export default PostDetailPage;
