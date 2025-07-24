import Link from 'next/link';
import { getTags } from '../../lib/get-tags';

const Tags = async () => {
  const tags = await getTags();

  return (
    <nav className="flex flex-col">
      {tags.map((tag) => (
        <Link href={`/tags/${tag}`} key={tag} className={`block py-1`}>
          <p>#{tag}</p>
        </Link>
      ))}
    </nav>
  );
};

const SidebarTags = () => {
  return (
    <aside className="hidden xl:block w-44 pt-6 ml-10">
      <h3 className="border-b border-gray-300">태그</h3>
      <Tags />
    </aside>
  );
};

export default SidebarTags;
