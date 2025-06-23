'use client';

import { useDarkMode } from '../../../contexts/ThemeProvider';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';

const MdRender = ({ content }: { content: string }) => {
  const { darkMode } = useDarkMode();

  return (
    <div
      className="markdown-body"
      style={{ backgroundColor: darkMode ? '#030712' : '#fff' }}
    >
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MdRender;
