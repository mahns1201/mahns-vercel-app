export const dynamic = 'force-dynamic';

import { getPickedPosts } from '../../lib/get-picked-posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import HomeLoading from './Loading';
import GoTo from '../../components/GoTo';
import SidebarTags from '../../components/layouts/SidebarTags';
import RowTags from '../../components/layouts/RowTags';

const Posts = async () => {
  const posts = await getPickedPosts();

  return (
    <ul>
      <PostList posts={posts} />
    </ul>
  );
};

const HomePage = () => {
  return (
    <>
      <h1 className="my-2 pt-6 pb-8 md:my-5">고정 게시물</h1>
      <Suspense fallback={<HomeLoading />}>
        <div className="flex">
          <div className="flex flex-col w-full">
            <RowTags />
            <Posts />
            <GoTo params={{ href: '/posts', content: '모든 게시물' }} />
          </div>
          <SidebarTags />
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
