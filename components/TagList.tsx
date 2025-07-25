'use client';

import Link from 'next/link';

const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tags/${tag}`}
          className="hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          <p>#{tag}</p>
        </Link>
      ))}
    </div>
  );
};

export default TagList;
