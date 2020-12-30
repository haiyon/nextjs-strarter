import '../styles/globals.scss';

import { ApolloProvider } from '@apollo/client';

import MainLayout from '../layouts';
import { useApollo } from '../utils/apollo';

const App = ({ Component, pageProps }: any) => {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <MainLayout {...pageProps}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </MainLayout>
  );
};

export default App;
