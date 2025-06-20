const PostCard = ({ post }) => {
  return (
    <article className="flex items-center gap-6 p-4">
      <img
        src={post.thumbnail ? post.thumbnail : '/logo.png'}
        alt={post.title}
        className="w-42 h-36 object-cover rounded-md flex-shrink-0"
      />
      <div className="flex-1">
        <h2 className="h2">{post.title}</h2>
        <p className="p">{post.summary}</p>
      </div>
      <div className="text-xs text-gray-400 dark:text-gray-500 ml-4 whitespace-nowrap">
        {post.createdAt}
      </div>
    </article>
  );
};

export default PostCard;
