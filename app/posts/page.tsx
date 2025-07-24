export const dynamic = 'force-dynamic';

import { getPosts } from '../../lib/get-posts';
import PostList from '../../components/PostList';
import { Suspense } from 'react';
import Loading from '../../components/Loading';
import GoTo from '../../components/GoTo';
import SidebarTags from '../../components/layouts/SidebarTags';

const Posts = async () => {
  const posts = await getPosts();

  return (
    <ul>
      <PostList posts={posts} />
    </ul>
  );
};

const PostsPage = () => {
  return (
    <>
      <h1 className="my-2 pt-6 pb-8 md:my-5">게시물</h1>
      <Suspense fallback={<Loading />}>
        <div className="flex">
          <Posts />
          <SidebarTags />
        </div>
      </Suspense>
      <GoTo params={{ href: '/', content: '고정 게시물' }} />
    </>
  );
};

export default PostsPage;
