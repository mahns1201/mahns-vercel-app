import Image from '/public/email.svg';

const Email = ({ size = 12 }) => {
  return (
    <Image
      className={`hover:text-primary-500 dark:hover:text-primary-400 fill-current text-gray-700 dark:text-gray-200 h-${size} w-${size}`}
    />
  );
};

export default Email;
