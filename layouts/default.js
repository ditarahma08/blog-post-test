import React from 'react'
import Head from 'next/head'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

const LayoutComponent = (props) => (
  <>
    <Head>
      <meta name="description" content={props.meta_content} />
      <title>{props.meta_title}</title>
    </Head>
    <Header />
    <div style={{ marginTop: '120px' }}>
      {props.children}
    </div>
    <Footer />
  </>
)

export default LayoutComponent
