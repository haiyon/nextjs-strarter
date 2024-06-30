import React from 'react';

import Head from 'next/head';

export interface HeadTitleProps {
  suffix?: string;
  children?: string;
}

const HeadTitle: React.FC<HeadTitleProps> = ({ suffix, children }) => {
  const title = children ? children + (suffix ? ` - ${suffix}` : '') : 'Next.js Starter';
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Head>
  );
};

export default HeadTitle;
