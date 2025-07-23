const PostCard = ({ post }) => {
  return (
    <article className="flex flex-col sm:flex-row items-center gap-4 px-2 sm:px-4 xl:px-6">
      <img
        src={post.thumbnail ? post.thumbnail : '/logo.png'}
        alt={post.title ? post.title : '무제'}
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
