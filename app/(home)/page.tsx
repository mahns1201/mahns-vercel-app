export const dynamic = 'force-dynamic';

import { getPickedPosts } from '../../lib/get-picked-posts';
import PostList from '../../components/PostList';
import GoTo from '../../components/GoTo';
import SidebarTags from '../../components/layouts/SidebarTags';
import RowTags from '../../components/layouts/RowTags';

const HomePage = async () => {
  const posts = await getPickedPosts();

  return (
    <>
      <h1 className="my-2 pt-6 pb-8 md:my-5">고정 게시물</h1>
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

export default HomePage;
