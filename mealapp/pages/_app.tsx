import '../styles/globals.css'
import type { AppProps } from 'next/app'

import 'nprogress/nprogress.css';
import '../styles/nprogress.css';
import { Router } from 'next/router';
import nProgress from 'nprogress';

Router.events.on('routeChangeStart', () => nProgress.start());
Router.events.on('routeChangeComplete', () => nProgress.done());
Router.events.on('routeChangeError', () => nProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
