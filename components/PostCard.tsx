import TagList from './TagList';

const PostCard = ({ post }) => {
  return (
    <article className="flex flex-col sm:flex-row items-center gap-4">
      <img
        src={post.thumbnail ? post.thumbnail : '/logo.png'}
        alt={post.title ? post.title : '무제'}
        className="w-full h-60 sm:w-54 sm:h-42 object-cover rounded-md flex-shrink-0"
      />
      <div className="sm:flex-1 space-y-2">
        <h2>{post.title}</h2>
        <p>{post.summary.length > 150 ? `${post.summary}...` : post.summary}</p>
        <div className="flex flex-wrap gap-2">
          <TagList
            tags={post.tags}
            styles="hover:underline bg-gray px-2 rounded-full"
          />
        </div>
        <p className="text-right">{post.createdAt}</p>
      </div>
    </article>
  );
};

export default PostCard;
