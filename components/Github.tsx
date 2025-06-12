import metadata from '../data/metadata';
import Image from '/public/github.svg';

const GitHub = ({ size = 6 }) => {
  return (
    <a href={metadata.github} target="_blank" rel="noopener noreferrer">
      <Image
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
      />
    </a>
  );
};

export default GitHub;
