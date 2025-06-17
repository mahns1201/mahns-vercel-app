import Link from 'next/link';
import Linkedin from './Linkedin';
import Email from './Email';
import Github from './Github';
import siteMetadata from '../data/metadata.js';

const Footer = () => {
  return (
    <footer>
      <div className="my-2 flex flex-col items-center mx-auto max-w-3xl px-4">
        <div className="mb-3 flex space-x-4">
          <Github />
          <Linkedin />
          <Email />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
