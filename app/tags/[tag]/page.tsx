export const dynamic = 'force-dynamic';

import { getPostsByTag } from '../../../lib/get-posts-by-tag';
import PostList from '../../../components/PostList';
import { Suspense } from 'react';
import TagLoading from './Loading';
import GoTo from '../../../components/GoTo';
import SidebarTags from '../../../components/layouts/SidebarTags';

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
      <h1 className="my-2 pt-6 pb-8 md:my-5">#{tag}</h1>
      <Suspense fallback={<TagLoading />}>
        <div className="flex">
          <div className="flex flex-col">
            <Posts params={params} />
            <GoTo params={{ href: '/posts', content: '모든 게시물' }} />
          </div>
          <SidebarTags />
        </div>
      </Suspense>
    </>
  );
};

export default PostsByTagPage;
