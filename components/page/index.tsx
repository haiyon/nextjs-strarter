import PropTypes from 'prop-types';
import { forwardRef, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

interface Props {
  children: ReactNode;
  title?: string | '';
}

const Page = forwardRef<HTMLDivElement, Props>(({ children, title = '', ...rest }, ref) => (
  <div ref={ref} {...rest}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </div>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;
