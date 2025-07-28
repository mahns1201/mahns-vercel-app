import { TableOfContent } from '../../../types/table-of-content';

const TableOfContentRender = ({ tableOfContents }: { tableOfContents: TableOfContent[] }) => {
  return (
    <ul className='bg-gray p-4'>
      {tableOfContents.map((item) => (
        <li key={item.id} style={{ marginLeft: (item.level - 1) * 16 }}>
          {/* <a href={`#${item.id}`}>{item.title}</a> */}
          <p>{item.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContentRender;
