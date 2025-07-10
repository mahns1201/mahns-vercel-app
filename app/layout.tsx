import { Metadata } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DarkModeProvider } from '../contexts/ThemeProvider';
import SectionContainer from '../components/SectionContainer';
import siteMetadata from '../data/metadata';
import '../styles/global.css';
import Analytics from '../components/Analytics';
import { Suspense } from 'react';
import Script from 'next/script';

const NEXT_PUBLIC_GA_ID = process.env.NEXT_PUBLIC_GA_ID || '';
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
  manifest: '/site.webmanifest',
  verification: {
    google: NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Google Analytics */}
        {NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${NEXT_PUBLIC_GA_ID}`}
            />
            <Script
              id="gtag-init"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="pl-[calc(100vw-100%)] bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <DarkModeProvider>
          <Suspense fallback={null}>
            <Analytics />
          </Suspense>
          <SectionContainer>
            <Header />
            <main className="mb-auto min-h-screen">{children}</main>
            <Footer />
          </SectionContainer>
        </DarkModeProvider>
      </body>
    </html>
  );
}
