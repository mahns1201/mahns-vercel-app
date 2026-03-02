import metadata from '../../data/metadata';
import Image from 'next/image';

const GitHub = ({ size = 24 }) => {
  return (
    <a href={metadata.github} target="_blank" rel="noopener noreferrer">
      <Image
        width={size}
        height={size}
        src="/github.svg"
        className="hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200"
        alt="github"
      />
    </a>
  );
};

export default GitHub;
