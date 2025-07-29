import { getTags } from '../../lib/get-tags';
import TagList from '../TagList';

const Tags = async () => {
  const tags = await getTags();

  return (
    <nav className="flex space-x-2 h-15 items-center">
      <TagList
        tags={tags}
        styles={
          'py-1 hover-bg-gray whitespace-nowrap bg-gray px-2 rounded-full'
        }
      />
    </nav>
  );
};

const RowTags = () => {
  return (
    <aside className="xl:hidden overflow-x-auto">
      <Tags />
    </aside>
  );
};

export default RowTags;
