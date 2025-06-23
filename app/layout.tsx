import { Metadata } from 'next';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { DarkModeProvider } from '../contexts/ThemeProvider';
import SectionContainer from '../components/SectionContainer';
import siteMetadata from '../data/metadata';
import '../styles/global.css';

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
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </head>

      <body className="pl-[calc(100vw-100%)] bg-white text-black antialiased dark:bg-gray-950 dark:text-white">
        <DarkModeProvider>
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
