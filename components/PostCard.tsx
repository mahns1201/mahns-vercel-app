const PostCard = ({ post }) => {
  return (
    <article className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 px-2 sm:px-4 xl:px-6">
      <img
        src={post.thumbnail ? post.thumbnail : '/logo.png'}
        alt={post.title}
        className="w-28 h-21 sm:w-32 sm:h-24 xl:w-40 xl:h-30 object-cover rounded-md flex-shrink-0"
      />
      <div className="sm:flex-1">
        <h2 className="text-center sm:text-left">{post.title}</h2>
        <p>
          {post.summary.length > 150
            ? post.summary.slice(0, 150) + '...'
            : post.summary}
        </p>
      </div>
      <p>{post.createdAt}</p>
    </article>
  );
};

export default PostCard;
