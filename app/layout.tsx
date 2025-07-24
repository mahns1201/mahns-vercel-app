import { Metadata } from 'next';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import { DarkModeProvider } from '../contexts/ThemeProvider';
import siteMetadata from '../data/metadata';
import '../styles/global.css';
import Analytics from '../components/seo/Analytics';
import { Suspense } from 'react';
import GoogleAnalytics from '../components/seo/GoogleAnalytics';
import MainContainer from '../components/layouts/MainContainer';

const NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE =
  process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE || '';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  icons: [
    {
      rel: 'icon',
      url: '/favicon-16x16.png',
      sizes: '16x16',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/favicon-32x32.png',
      sizes: '32x32',
      type: 'image/png',
    },
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
  verification: {
    google: NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE,
    other: {
      'naver-site-verification': process.env.NEXT_PUBLIC_NAVER_VERIFICATION,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="pl-[calc(100vw-100%)] bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <GoogleAnalytics />
        <DarkModeProvider>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <MainContainer>
            <Header />
            <main className="mb-auto min-h-screen">{children}</main>
            <Footer />
          </MainContainer>
        </DarkModeProvider>
      </body>
    </html>
  );
}
