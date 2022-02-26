import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

import { Footer } from '../components/ui/sections/Footer';
import { Header } from '../components/ui/sections/Header';
import { MainContainer } from '../components/ui/sections/MainContainer';

const LANGUAGES = ['fr', 'en'];

class MyDocument extends Document {
  render() {
    const pathPrefix = this.props.__NEXT_DATA__.page.split('/')[1];

    const lang =
      LANGUAGES.indexOf(pathPrefix) !== -1 ? pathPrefix : LANGUAGES[0];

    return (
      <Html lang={lang}>
        <Head>
        </Head>
        <body className="bg-green-50 p-8">
          <Header />
          <MainContainer>
            <Main />
          </MainContainer>
          <NextScript />
          <Footer />
        </body>
      </Html>
    );
  }
}

export default MyDocument;