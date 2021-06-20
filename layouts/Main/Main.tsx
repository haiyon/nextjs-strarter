import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }: Props) => <>{children}</>;

MainLayout.propTypes = {
  children: PropTypes.node
};

export default MainLayout;
