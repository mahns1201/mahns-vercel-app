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
          .markdown-body h2 {
            border-bottom: none;
          }
        `}
      </style>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MdRender;
