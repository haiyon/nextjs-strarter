import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

interface Props {
  suffix?: string;
  children?: string;
}

const Title: React.FC<Props> = ({ suffix, children }) => {
  const title = children ? children + (suffix ? ` - ${suffix}` : '') : 'Next.js Starter';
  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="og:title" property="og:title" content={title} />
    </Head>
  );
};

Title.propTypes = {
  suffix: PropTypes.string,
  children: PropTypes.string
};

export default Title;
