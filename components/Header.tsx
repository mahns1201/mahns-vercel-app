import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { href: '/posts', label: 'Posts' },
  { href: '/about', label: 'About' },
];

const Header = () => (
  <header>
    <div className="flex justify-between items-center py-6">
      <Link href="/" className="flex space-x-2">
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="flex items-center text-base sm:text-xl font-bold text-gray-900 dark:text-gray-100 cursor-pointer">
          만쓰 이모저모
        </span>
      </Link>
      <nav className="flex items-center space-x-2 sm:space-x-6">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="text-sm sm:text-lg font-bold text-gray-900 dark:text-gray-100 cursor-pointer"
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </nav>
    </div>
  </header>
);

export default Header;
