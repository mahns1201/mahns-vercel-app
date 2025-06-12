import Image from '/public/linkedin.svg';
import metadata from '../data/metadata.js';

const Linkedin = ({ size = 6 }) => {
  return (
    <a href={metadata.linkedin} target="_blank" rel="noopener noreferrer">
      <Image
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
      />
    </a>
  );
};

export default Linkedin;
