import metadata from '../data/metadata.js';
import Image from '/public/linkedin.svg';

const Linkedin = ({ size = 24 }) => {
  return (
    <a href={metadata.linkedin} target="_blank" rel="noopener noreferrer">
      <Image
        width={size}
        height={size}
        className="hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200"
      />
    </a>
  );
};

export default Linkedin;
