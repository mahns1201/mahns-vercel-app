import Head from 'next/head';

const GA_ID = process.env.GA_ID || '';
const GOOGLE_SEARCH_CONSOLE = process.env.GOOGLE_SEARCH_CONSOLE || '';

const SeoHead = () => {
  return (
    <Head>
      {/* Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `,
        }}
      />

      {/* Google Search Console */}
      <meta name="google-site-verification" content={GOOGLE_SEARCH_CONSOLE} />

      {/* Favicon */}
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
    </Head>
  );
};

export default SeoHead;
