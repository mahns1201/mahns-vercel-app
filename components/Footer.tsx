import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        {/* 소셜 아이콘 영역 (필요시 활성화) */}
        {/* <div className="mb-3 flex space-x-4">
          <SocialIcon kind="github" href="https://github.com/mahns1201" size={6} />
        </div> */}
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>© {new Date().getFullYear()}</div>
          <div>•</div>
          <Link href="/" className="hover:underline">
            Mahns Blog
          </Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href="https://github.com/timlrx/tailwind-nextjs-starter-blog"
            className="hover:underline"
          >
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  );
}
