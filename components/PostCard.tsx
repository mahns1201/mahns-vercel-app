const PostCard = ({ post }) => {
  return (
    <article className="flex flex-col sm:flex-row items-center gap-4 px-2 sm:px-4 xl:px-6">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={post.thumbnail ? post.thumbnail : '/logo.png'}
        alt={post.title ? post.title : '무제'}
        // className="w-28 h-21 sm:w-32 sm:h-24 xl:w-40 xl:h-30 object-cover rounded-md flex-shrink-0"
        className="w-60 h-40 sm:w-54 sm:h-36 object-cover rounded-md flex-shrink-0"
      />
      <div className="sm:flex-1 space-y-2">
        <h2>{post.title}</h2>
        <p>{post.summary.length > 150 ? `${post.summary}...` : post.summary}</p>
        <p className="text-right">{post.createdAt}</p>
      </div>
    </article>
  );
};

export default PostCard;
