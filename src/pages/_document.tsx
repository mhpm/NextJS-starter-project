import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Coffee Store Discovery" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, NextJs, Coffee, Store"
        />
        <meta name="author" content="Michelle Perez Morales" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <body className="brackground min-h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
