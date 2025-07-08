import { Metadata } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DarkModeProvider } from '../contexts/ThemeProvider';
import SectionContainer from '../components/SectionContainer';
import siteMetadata from '../data/metadata';
import '../styles/global.css';
import SeoHead from './SeoHead';
import Analytics from '../components/Analytics';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <SeoHead />
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
