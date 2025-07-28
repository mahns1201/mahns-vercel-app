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
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MdRender;
