import Router from 'next/router';
import NProgress from 'nprogress';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';

import '@fortawesome/fontawesome-free/css/all.css';
import '../style/index.css';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
