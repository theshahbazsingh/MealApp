import Document, { Head, Main, NextScript } from 'next/document';
import React from 'react';

import { Footer } from '../components/UI/sections/Footer';
import { Header } from '../components/UI/sections/Header';
import { MainContainer } from '../components/UI/sections/MainContainer';

const LANGUAGES = ['fr', 'en'];

class MyDocument extends Document {
  render() {
    const pathPrefix = this.props.__NEXT_DATA__.page.split('/')[1];

    const lang =
      LANGUAGES.indexOf(pathPrefix) !== -1 ? pathPrefix : LANGUAGES[0];

    return (
      <html lang={lang}>
        <Head />
        <body className="bg-green-50 p-8">
          <Header />
          <MainContainer>
            <Main />
          </MainContainer>
          <NextScript />
          <Footer />
        </body>
      </html>
    );
  }
}

export default MyDocument;