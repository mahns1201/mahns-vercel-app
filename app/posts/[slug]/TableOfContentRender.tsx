import { TableOfContent } from '../../../types/table-of-content';

const TableOfContentRender = ({
  tableOfContents,
}: {
  tableOfContents: TableOfContent[];
}) => {
  return (
    <ul className="bg-gray p-4">
      {tableOfContents.map((item) => (
        <li
          key={item.title}
          style={{ marginLeft: (item.level - 1) * 16 }}
          className="hover:underline"
        >
          <a href={`#${item.title}`}>
            <p>{item.title}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default TableOfContentRender;
