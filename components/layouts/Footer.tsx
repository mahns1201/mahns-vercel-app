import Link from 'next/link';
import Linkedin from '../images/Linkedin';
import Email from '../images/Email';
import Github from '../images/Github';
import siteMetadata from '../../data/metadata.js';

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center py-6 space-y-4">
        <div className="flex space-x-4">
          <Github />
          <Linkedin />
          <Email />
        </div>
        <div className="flex space-x-2">
          <p>{siteMetadata.author}</p>
          <p>{` • `}</p>
          <p>{`© ${new Date().getFullYear()}`}</p>
          <p>{` • `}</p>
          <Link href="/">
            <p>{siteMetadata.title}</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
