import { getPostBySlug } from '../../../lib/get-post-by-slug';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import PostLoading from './Loading';
import MdRender from './MdRender';
import siteMetadata from '../../../data/metadata';
import TagList from '../../../components/TagList';
import SectionContainer from '../../../components/layouts/SectionContainer';

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
      <div className="flex flex-col space-y-2 sm:space-y-5 my-2 pt-6 pb-8 md:my-5">
        <h1 className="text-justify">{post.title}</h1>
        <TagList tags={post.tags} />
        <div className="flex space-x-1 ml-auto">
          <p>{post.createdAt}</p>
          <p>•</p>
          <p>{post.stats.text} ☕️</p>
        </div>
      </div>
      <div className="mt-6">
        <MdRender content={post.content} />
      </div>
    </>
  );
};

const PostDetailPage = ({ params }: Params) => {
  return (
    <article>
      <SectionContainer>
        <Suspense fallback={<PostLoading />}>
          <Post params={params} />
        </Suspense>
      </SectionContainer>
    </article>
  );
};

export default PostDetailPage;
