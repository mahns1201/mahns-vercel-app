export const dynamic = 'force-dynamic';

import { getPostsByTag } from '../../../lib/get-posts-by-tag';
import PostList from '../../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../../components/Loading';
import GoTo from '../../../components/GoTo';

interface Params {
  params: Promise<{ tag: string }>;
}

const Posts = async ({ params }: Params) => {
  const { tag } = await params;

  const posts = await getPostsByTag(tag);

  return (
    <ul>
      <PostList posts={posts} />
    </ul>
  );
};

const PostsByTagPage = async ({ params }: Params) => {
  const { tag } = await params;

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <h1 className="my-2 pt-6 pb-8 md:my-5">#{tag}</h1>
        <Suspense fallback={<Loading />}>
          <Posts params={params} />
        </Suspense>
      </div>
      <GoTo params={{ href: '/posts', content: '모든 게시물' }} />
    </>
  );
};

export default PostsByTagPage;
