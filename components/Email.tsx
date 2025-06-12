import metadata from '../data/metadata';
import Image from '/public/email.svg';

const Email = ({ size = 24 }) => {
  return (
    <a href={`mailto:${metadata.email}`}>
      <Image
        width={size}
        height={size}
        className="hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200"
      />
    </a>
  );
};

export default Email;
