'use client';

import Link from 'next/link';

const TagList = ({ tags, styles }: { tags: string[]; styles: string }) => {
  return (
    <>
      {tags.map((tag) => (
        <Link
          key={tag}
          href={`/tags/${tag}`}
          className={styles}
          onClick={(e) => e.stopPropagation()}
        >
          <p>#{tag}</p>
        </Link>
      ))}
    </>
  );
};

export default TagList;
