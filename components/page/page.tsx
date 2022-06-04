import React, { ReactNode } from 'react';

import Title from './title';

export interface PageProps {
  children: ReactNode;
  title?: string | '';
}

const Page: React.FC<PageProps> = ({ children, title }) => (
  <>
    <Title suffix="Next.js Starter">{title}</Title>
    {children}
  </>
);

export { Page, Title };
