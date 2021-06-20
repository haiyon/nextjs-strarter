import '@/assets/styles/global.css';

import ProgressBar from '@badrap/bar-of-progress';
import Head from 'next/head';
import Router from 'next/router';
import React from 'react';

import Title from '@/components/Page/Title';

const progress = new ProgressBar({
  size: 2,
  color: '#16A34A',
  className: 'bar-of-progress',
  delay: 100
});

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start();
  progress.finish();
}

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', () => {
  progress.finish();
  window.scrollTo(0, 0);
});
Router.events.on('routeChangeError', progress.finish);

const App = ({ Component, pageProps }: any) => {
  const Layout = Component.layout || (({ children }: any) => <>{children}</>);
  const mate = Component.layoutProps?.mate || {};

  return (
    <>
      <Head>
        <Title suffix="Next.js Starter">{mate.title}</Title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
