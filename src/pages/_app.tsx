import React, {useEffect} from 'react';
import type {AppProps} from 'next/app';

import Head from 'next/head';

import {ThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from '../styles/theme';
import {Menu, Content} from '../components';

// this is from the material nextjs example
const removeServerSideCSS = () => {
  const jssStyles = document.querySelector('#jss-server-side');
  if (jssStyles) {
    jssStyles.parentElement.removeChild(jssStyles);
  }
};

const App = ({Component, pageProps}: AppProps) => {
  useEffect(removeServerSideCSS, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Menu />
        <Content>
          <Component {...pageProps} />
        </Content>
      </ThemeProvider>
    </>
  );
};

export default App;
