import Link from 'next/link';

interface Params {
  params: {
    href: string;
    content: string;
  };
}

const GoTo = ({ params }: Params) => {
  const { href, content } = params;

  return (
    <div className="flex justify-end mt-20">
      <Link href={href} className="cursor-pointer my-6" aria-label={content}>
        <p>{content} &rarr;</p>
      </Link>
    </div>
  );
};

export default GoTo;
