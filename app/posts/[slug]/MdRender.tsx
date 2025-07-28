/* eslint-disable @typescript-eslint/no-unused-vars */

'use client';

import { useDarkMode } from '../../../contexts/ThemeProvider';
import ReactMarkdown from 'react-markdown';

const MdRender = ({ content }: { content: string }) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className="markdown-body"
      style={{ backgroundColor: darkMode ? '#030712' : '#fff' }}
    >
      <style>
        {`
          .markdown-body h1 {
            margin-top: 5rem;
          }
          .markdown-body h2 {
            margin-top: 3rem;
            border-bottom: none;
          }
          .markdown-body h3 {
            margin-top: 2rem;
          }
        `}
      </style>
      <ReactMarkdown
        components={{
          h1({ node, children }) {
            const id = children.toString() || '';
            return <h1 id={id}>{children}</h1>;
          },
          h2({ node, children }) {
            const id = children.toString() || '';
            return <h2 id={id}>{children}</h2>;
          },
          h3({ node, children }) {
            const id = children.toString() || '';
            return <h3 id={id}>{children}</h3>;
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MdRender;
