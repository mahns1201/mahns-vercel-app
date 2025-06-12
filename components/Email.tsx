import metadata from '../data/metadata';
import Image from '/public/email.svg';

const Email = ({ size = 6 }) => {
  return (
    <a href={`mailto:${metadata.email}`}>
      <Image
        className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
      />
    </a>
  );
};

export default Email;
