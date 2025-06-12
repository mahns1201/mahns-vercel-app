import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/about', label: 'About' },
];

const Header = () => (
  <header className="w-full bg-white shadow-sm dark:bg-gray-950">
    <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-6">
      <Link href="/" className="flex items-center space-x-2">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          만쓰 이모저모
        </span>
      </Link>
      <nav className="flex items-center space-x-6">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-small font-bold"
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
