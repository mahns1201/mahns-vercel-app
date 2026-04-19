export const dynamic = 'force-dynamic';

import { getPostsByTag } from '../../../lib/get-posts-by-tag';
import PostList from '../../../components/PostList';
import GoTo from '../../../components/GoTo';
import SidebarTags from '../../../components/layouts/SidebarTags';
import RowTags from '../../../components/layouts/RowTags';

interface Params {
  params: Promise<{ tag: string }>;
}

const PostsByTagPage = async ({ params }: Params) => {
  const { tag } = await params;
  const posts = await getPostsByTag(tag);

  return (
    <>
      <h1 className="my-2 pt-6 pb-8 md:my-5">#{tag}</h1>
      <div className="flex">
        <div className="flex flex-col w-full">
          <RowTags />
          <ul>
            <PostList posts={posts} />
          </ul>
          <GoTo params={{ href: '/posts', content: '모든 게시물' }} />
        </div>
        <SidebarTags />
      </div>
    </>
  );
};

export default PostsByTagPage;
