import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/images/banner/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body className="antialiased text-gray-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
