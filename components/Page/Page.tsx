import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

import Title from './Title';

interface Props {
  children: ReactNode;
  title?: string | '';
}

const Page: React.FC<Props> = ({ children, title }) => (
  <>
    <Title suffix="Next.js Starter">{title}</Title>
    {children}
  </>
);

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
