import { getTags } from '../../lib/get-tags';
import TagList from '../TagList';

const Tags = async () => {
  const tags = await getTags();

  return (
    <nav className="flex flex-col">
      <TagList tags={tags} styles={'py-1 hover-bg-gray'} />
    </nav>
  );
};

const SidebarTags = () => {
  return (
    <aside className="hidden xl:block w-44 pt-6 ml-10">
      <h3 className="border-b border-gray">태그</h3>
      <Tags />
    </aside>
  );
};

export default SidebarTags;
