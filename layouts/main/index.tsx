import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const MainLayout = ({ children, ...rest }: Props) => <div {...rest}>{children}</div>;

export default MainLayout;
