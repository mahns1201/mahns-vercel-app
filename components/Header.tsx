import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm dark:bg-gray-950">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-6">
        {/* Logo or Site Title */}
        <Link href="/" className="flex items-center space-x-2">
          {/* <Logo className="h-8 w-8" /> */}
          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Mahns Blog
          </span>
        </Link>
        {/* Navigation */}
        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium"
          >
            Posts
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400 font-medium"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
