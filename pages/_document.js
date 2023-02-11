/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { PREFIX_IMAGE } from '~/utils/constant'
import Document, {
  Html, Main, NextScript,Head
} from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href={`${PREFIX_IMAGE}/dummyimage.jpg`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await Document.getInitialProps(ctx)

  return {
    ...initialProps
  }
}
