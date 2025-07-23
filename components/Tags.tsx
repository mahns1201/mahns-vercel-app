const Tags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-1">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full px-3 py-1 bg-[var(--primary-color)] text-gray-300"
        >
          #{tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
