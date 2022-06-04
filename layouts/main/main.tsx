import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }: Props) => <>{children}</>;

export default MainLayout;
