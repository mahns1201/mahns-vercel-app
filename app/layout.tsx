import Footer from '../components/Footer';
import Header from '../components/Header';
import SectionContainer from '../components/SectionContainer';
import '../styles/tailwind.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <SectionContainer>
          <Header />
          <main className="mb-auto min-h-screen">{children}</main>
          <Footer />
        </SectionContainer>
      </body>
    </html>
  );
}
